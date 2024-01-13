"use strict";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

function AllCategories() {
  // State to store all products
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch all products
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to filter products by category and return the first four items
  const filterProductsByCategory = (category) => {
    const categoryProducts = products.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
    return categoryProducts.slice(0, 4); // Return only the first four items
  };

  return (
    <div>
      {/* Map over categories and render each category */}
      {['electronics', 'jewelery', "women's clothing"].map((category) => (
        <div key={category} className="product-container">
          <div className="row mb-4">
              <h5 className="card-title" style={{ fontWeight: '100' }}>
                {category.toUpperCase()} CATEGORY
              </h5>
          </div>
          <Link href={`/${category}`} className="custom-right-align">
            {/* <h5 className="card-title custom-right-align-text"></h5> */}
            <Link className="link" href={`/product_listing/${category}`}>Explore</Link>
          </Link>
          {/* Render products for the current category */}
          <div className='row mb-4'>
              {filterProductsByCategory(category).map((product) => (
                <div key={product.id} className="col-md-3 mb-4">
                    <div style={{ borderRadius: '8px' }}>
                    <Link href={`/product_details/${product.id}`}>
                        <img src={product.image} 
                        alt={product.title} 
                        style={{ width: '350px', height: '300px', borderRadius: '8px' ,display:"flex",flex:"wrap",justifyContent:"space-between"}}
                        />
                      </Link>  
                        <div className="p-3">
                        <h6>{product.title}</h6>
                        <div className='rating'>Rating: {product.rating.rate}
                          <p className='price'>Price: ${product.price}</p>
                        </div>
                      </div>
                  </div>
              </div>   
            ))}
            </div>
        </div>
      ))}
    </div>
  );
}

export default AllCategories;