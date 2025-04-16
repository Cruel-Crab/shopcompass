const express = require( 'express' );
const cors = require( 'cors' );

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use( cors() ); // enables frontend to access the backend
app.use( express.json() ); // allows us to parse JSON data in requests

app.get( '/api/search', ( req, res ) => {
    const { query } = req.query;
    if ( !query ) {
        res.status( 400 ).json( { error: 'Query parameter is required' } );
    }

    const products = [
        {
            id: 1,
            name: `Sample ${query} from BlinkIt`,
            store: 'BlinkIt',
            price: '299',
            image: 'https://via.placeholder.com/150',
            link: 'https://blinkit.com',
        },
        {
            id: 2,
            name: `Sample ${query} from Zepto`,
            store: 'Zepto',
            price: '289',
            image: 'https://via.placeholder.com/150',
            link: 'https://www.zeptonow.com',
        },
        {
            id: 3,
            name: `Sample ${query} from Instamart`,
            store: 'Swiggy Instamart',
            price: '310',
            image: 'https://via.placeholder.com/150',
            link: 'https://www.swiggy.com/instamart',
        },
    ];

    res.json( products );
} )

app.get( '/', ( req, res ) => {
    res.send( '🛒 ShopCompass backend is running!!!' );
} );

// start the server
app.listen( PORT, () => {
    console.log( `✅ Server live at http://localhost:${PORT}` );
} );