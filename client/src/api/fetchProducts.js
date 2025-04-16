export const fetchProducts = async ( query ) => {
    console.log( 'Fetching products for query:', query );
    try {
        const response = await fetch( `http://localhost:5000/api/search?query=${query}` );
        if ( !response.ok ) {
            throw new Error( 'Failed to fetch' );
        }
        const data = await response.json();
        return data;
    } catch ( error ) {
        console.error( 'Error fetching products:', error );
        throw error; // rethrow the error to be handled by the caller
    }
}