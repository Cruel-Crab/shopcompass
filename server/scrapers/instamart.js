const instamartScraper = ( query ) => {
    return [
        {
            id: 'instamart1',
            title: `Instamart - ${query} Product 1`,
            price: '₹179',
            image: 'https://via.placeholder.com/150',
            store: 'Swiggy Instamart',
            link: `https://www.swiggy.com/search?query=${query}`,
        },
        {
            id: 'instamart2',
            title: `Instamart - ${query} Product 2`,
            price: '₹289',
            image: 'https://via.placeholder.com/150',
            store: 'Swiggy Instamart',
            link: `https://www.swiggy.com/search?query=${query}`,
        },
    ];
}

module.exports = instamartScraper;