import React from "react";
import ProductCard from "./ProductCard";


function ProductResults( { products } ) {
  if ( !products || products.length === 0 ) {
    return <p className="text-gray-500 mt-6">No products found.</p>;
  }

  return (
    <div className="grid gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

      {products.map( ( product, index ) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-xl p-4 border border-gray-100 hover:shadow-lg transition duration-200 text-center"
        >
          <ProductCard product={product} />
        </div>
      ) )}
    </div>
  );
}

export default ProductResults;
