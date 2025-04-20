const bigbasketScraper = ( query ) => {
    return [
        {
            id: 'bigbasket1',
            title: `BigBasket - ${query} Product 1`,
            price: '₹199',
            image: 'https://via.placeholder.com/150',
            store: 'BigBasket',
            link: `https://www.bigbasket.com/ps/?q=${query}`,
        },
        {
            id: 'bigbasket2',
            title: `BigBasket - ${query} Product 2`,
            price: '₹299',
            image: 'https://via.placeholder.com/150',
            store: 'BigBasket',
            link: `https://www.bigbasket.com/ps/?q=${query}`,
        },
    ];
}

module.exports = bigbasketScraper;