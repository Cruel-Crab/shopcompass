const express = require( 'express' );
const cors = require( 'cors' );

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use( cors() ); // enables frontend to access the backend
app.use( express.json() ); // allows us to parse JSON data in requests

// simple test route
app.get( '/', ( req, res ) => {
    res.send( '🛒 ShopCompass backend is running!!!' );
} );

// start the server
app.listen( PORT, () => {
    console.log( `✅ Server live at http://localhost:${PORT}` );
} );