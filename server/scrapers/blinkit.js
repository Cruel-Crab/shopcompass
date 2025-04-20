const blinkitScraper = async ( query ) => {
    // later we will add the code to scrape the data from BlinkIt

    return [
        {
            id: 'blinkit1',
            title: `BlinkIt - ${query} Product 1`,
            price: '₹199',
            image: 'https://via.placeholder.com/150',
            store: 'BlinkIt',
            link: `https://www.blinkit.com/s/${query}`,
        },
        {
            id: 'blinkit2',
            title: `BlinkIt - ${query} Product 2`,
            price: '₹299',
            image: 'https://via.placeholder.com/150',
            store: 'BlinkIt',
            link: `https://www.blinkit.com/s/${query}`,
        },
    ]
}

module.exports = blinkitScraper;