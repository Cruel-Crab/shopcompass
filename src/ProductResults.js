import React from "react";

const storeLogos = {
  BlinkIt: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Blinkit-yellow-app-icon.svg',
  Zepto: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Zepto_Logo.svg',
  'Swiggy Instamart': 'https://cdn.worldvectorlogo.com/logos/swiggy-1.svg',
  BigBasket: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/BigBasket_Logo.png',
};


function ProductResults( { products } ) {
  if ( !products || products.length === 0 ) {
    return <p className="text-gray-500 mt-6">No products found.</p>;
  }

  return (
    <div className="grid gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

      {products.map( ( product, index ) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-xl p-4 border border-gray-100 hover:shadow-lg transition duration-200"
        >
          {
            storeLogos[ product.store ] && (
              <img
                src={storeLogos[ product.store ]}
                alt={`${product.store} logo`}
                className="w-16 h-16 object-contain mb-4 mx-auto"
              />
            )
          }
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
          <p className="text-sm mb-1">💰 <span className="font-medium">₹{product.price}</span></p>
          <p className="text-sm text-gray-600 mb-3">🏪 {product.store}</p>
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            View on {product.store}
          </a>
        </div>
      ) )}
    </div>
  );
}

export default ProductResults;
