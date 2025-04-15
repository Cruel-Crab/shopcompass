export const fetchProducts = async ( query ) => {
    return new Promise( ( resolve ) => {
        setTimeout( () => {
            const results = [
                {
                    name: `${query}`,
                    price: 999,
                    store: "BlinkIt",
                    link: "https://blinkit.com",
                },
                {
                    name: `${query}`,
                    price: 1045,
                    store: "Zepto",
                    link: "https://zepto.com",
                },
                {
                    name: `${query}`,
                    price: 1010,
                    store: "Swiggy Instamart",
                    link: "https://www.swiggy.com/instamart",
                },
                {
                    name: `${query}`,
                    price: 970,
                    store: "BigBasket",
                    link: "https://bigbasket.com",
                },
            ];
            resolve( results );
        }, 1000 );
    } );
}