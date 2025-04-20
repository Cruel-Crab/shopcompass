import React from 'react';

const storeColors = {
    blinkit: "bg-lime-500",
    zepto: "bg-pink-500",
    bigbasket: "bg-green-700",
    instamart: "bg-orange-500",
};

const storeLogos = {
    BlinkIt: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Blinkit-yellow-app-icon.svg',
    Zepto: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Zepto_Logo.svg',
    'Swiggy Instamart': 'https://cdn.worldvectorlogo.com/logos/swiggy-1.svg',
    BigBasket: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/BigBasket_Logo.png',
};



const ProductCard = ( { product } ) => {
    return (
        <>
            {
                storeLogos[ product.store ] && (
                    <img
                        src={storeLogos[ product.store ]}
                        alt={`${product.store} logo`}
                        className="w-16 h-16 object-contain mb-4 mx-auto"
                    />
                )
            }
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h3>
            <p className="text-sm mb-1">💰 <span className="font-medium">₹{product.price}</span></p>
            <p className="text-sm text-gray-600 mb-3">🏪 {product.store}</p>
            <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-blue-700 transition"
            >
                View Product
            </a>
        </>
    )
};

export default ProductCard;