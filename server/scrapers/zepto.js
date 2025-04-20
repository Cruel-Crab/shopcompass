const zeptoScraper = ( query ) => {
    return [
        {
            id: 'zepto1',
            title: `Zepto - ${query} Product 1`,
            price: '₹149',
            image: 'https://via.placeholder.com/150',
            store: 'Zepto',
            link: `https://www.zeptonow.com/search?q=${query}`,
        },
        {
            id: 'zepto2',
            title: `Zepto - ${query} Product 2`,
            price: '₹249',
            image: 'https://via.placeholder.com/150',
            store: 'Zepto',
            link: `https://www.zeptonow.com/search?q=${query}`,
        },
    ];
}

module.exports = zeptoScraper;