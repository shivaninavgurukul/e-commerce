
// "use client";
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import Link from 'next/link';

// function Page({ params }) {
//   const [productDetails, setProductDetails] = useState(null);

//   const fetchProductDetails = () => {
//     fetch(`https://fakestoreapi.com/products/${params.pid}`)
//       .then((res) => res.json())
//       .then((res) => {
//         setProductDetails(res);
//       })
//       .catch((error) => {
//         console.error("Fetch error:", error);
//       });
//   };

//   useEffect(() => {
//     fetchProductDetails();
//   }, [params.pid]);

//   const addToCart = () => {
//     // Set a cookie with the product ID when "Add To Cart" button is clicked
//     document.cookie = `cartItem_${params.pid}=1; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;

//     console.log('Product added to cart:', {
//       productId: params.pid,
//       productName: productDetails.title,
//       price: productDetails.price,
//     });

//     // alert('Product added to cart!');
    
//   };

//   if (!productDetails) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Product Details</h1>
//       <img
//         src={productDetails.image}
//         style={{ width: '350px', height: '300px' }}
//       />
//       <p>Product ID: {productDetails.id}</p>
//       <p>Title: {productDetails.title}</p>
//       <button type="button" class="btn btn-danger" onClick={addToCart}>
//         Add To Cart
//       </button>
//       <button type="button" class="btn btn-danger margin-left">
//         Buy Now
//       </button>
//     </div>
//   );
// }


// export default Page;



"use client";
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Link from 'next/link';

function Page({ params }) {
  const [productDetails, setProductDetails] = useState(null);

  const fetchProductDetails = () => {
    fetch(`https://fakestoreapi.com/products/${params.pid}`)
      .then((res) => res.json())
      .then((res) => {
        setProductDetails(res);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  useEffect(() => {
    fetchProductDetails();
  }, [params.pid]);

  const addToCart = () => {
    // Set a cookie with the product ID when "Add To Cart" button is clicked
    document.cookie = `cartItem_${params.pid}=1; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;

    console.log('Product added to cart:', {
      productId: params.pid,
      productName: productDetails.title,
      price: productDetails.price,
    });

    // alert('Product added to cart!');
    
  };

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <img
        src={productDetails.image}
        style={{ width: '350px', height: '300px' }}
      />
      <p>Product ID: {productDetails.id}</p>
      <p>Title: {productDetails.title}</p>
      <button type="button" class="btn btn-danger" onClick={addToCart}>
        Add To Cart
      </button>
      <button type="button" class="btn btn-danger margin-left">
        Buy Now
      </button>
    </div>
  );
}

export default Page;