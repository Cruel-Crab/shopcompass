const express = require( 'express' );
const cors = require( 'cors' );
const blinkitScraper = require( './scrapers/blinkit' );
const bigbasketScraper = require( './scrapers/bigbasket' );
const zeptoScraper = require( './scrapers/zepto' );
const instamartScraper = require( './scrapers/instamart' );

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use( cors() ); // enables frontend to access the backend
app.use( express.json() ); // allows us to parse JSON data in requests

app.get( '/api/search', async ( req, res ) => {
    const { query } = req.query;
    if ( !query ) {
        res.status( 400 ).json( { error: 'Query parameter is required' } );
    }
    try {
        const resultSettled = await Promise.allSettled( [
            blinkitScraper( query ),
            zeptoScraper( query ),
            bigbasketScraper( query ),
            instamartScraper( query ),
        ] );
        const results = resultSettled.filter( ( result ) => result.status === 'fulfilled' ).flatMap( ( result ) => result.value );
        res.json( results );
    } catch ( error ) {
        console.error( error );
        res.status( 500 ).json( { error: 'Internal Server Error' } );
    }
} )

app.get( '/', ( req, res ) => {
    res.send( '🛒 ShopCompass backend is running!!!' );
} );

// start the server
app.listen( PORT, () => {
    console.log( `✅ Server live at http://localhost:${PORT}` );
} );