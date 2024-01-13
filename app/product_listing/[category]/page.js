// "use client"
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function ProductList({ params }) {
//   const [categoryProducts, setCategoryProducts] = useState([]);

//   const fetchCategoryProducts = () => {
//     fetch(`https://fakestoreapi.com/products/category/${params.category}`)
//       .then((res) => res.json())
//       .then((res) => {
//         setCategoryProducts(res);
//       })
//       .catch((error) => {
//         console.error("Fetch error:", error);
//       });
//   };

//   useEffect(() => {
//     fetchCategoryProducts();
//   }, [params.category]);

//   if (!categoryProducts) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container-fluid">
//       <h1>Product List - {params.category}</h1>
//       <div className="row">
//         {categoryProducts.map((product) => (
//           <div key={product.id} className="col-md-3 mb-4">
//             <div style={{ borderRadius: '8px', border: '1px solid black' }}>
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 style={{ width: '350px', height: '300px', borderRadius: '8px' }}
//               />
//               <div className="p-3">
//                 <h6>{product.title}</h6>
//                 <p>Price: ${product.price}</p>
//                 <p>ID: {product.id}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }













"use client";
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from './Footer.js';
import Link from 'next/link';
// import Titles from "./Title"

export default function ProductList({ params }) {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const fetchCategoryProducts = () => {
    fetch(`https://fakestoreapi.com/products/category/${params.category}`)
      .then((res) => res.json())
      .then((res) => {
        setCategoryProducts(res);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  const handleFilter = () => {
    const filteredProducts = categoryProducts.filter(
      (product) => (!minPrice || product.price >= parseFloat(minPrice)) &&
                   (!maxPrice || product.price <= parseFloat(maxPrice))
    );
    setCategoryProducts(filteredProducts);
  };

  useEffect(() => {
    fetchCategoryProducts();
  }, [params.category]);

  if (!categoryProducts) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid">
      <div id="title" className="col-lg">
    </div>
      {/* <Titles/> */}
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3">
          <div className="p-3" style={{  borderRadius: '8px' }}>
            <h4>Filter by Price</h4>
            <div className="mb-3">
              <label htmlFor="minPrice" className="form-label">Min Price</label>
              <input
                type="number"
                className="form-control"
                id="minPrice"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="maxPrice" className="form-label">Max Price</label>
              <input
                type="number"
                className="form-control"
                id="maxPrice"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
            <button className="btn btn-primary" onClick={handleFilter}>Filter</button>
          </div>
        </div>

        {/* Product List */}
        <div className="col-md-9">
          <h1>Product List - {params.category}</h1>
          <div className="row">
            {categoryProducts.map((product) => (
              <div key={product.id} className="col-md-3 mb-4">
                <div style={{ borderRadius: '8px' }}>
                  <Link href={`/product_details/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.title}
                      style={{ width: '350px', height: '300px', borderRadius: '8px' }}
                    />
                  </Link>
                  <div className="p-3">
                    <h6>{product.title}</h6>
                    <p>Price: ${product.price}</p>
                    <div className='rating'>Rating: {product.rating.rate}
                      <p className='price'>Price: ${product.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
    
  );
}