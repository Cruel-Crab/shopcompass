import React, { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import ProductResults from "./ProductResults";
import { fetchProducts } from "./api/fetchProducts";

function App() {
  const [ products, setProducts ] = useState( [] );
  const [ loading, setLoading ] = useState( false );
  const [ searched, setSearched ] = useState( false ); // 👈 track if user searched

  const handleSearch = async ( query ) => {
    if ( !query.trim() ) return;

    setLoading( true ); // 👈 set loading to true when user searches
    setSearched( true ); // 👈 set searched to true when user searches

    try {
      const results = await fetchProducts( query );
      setProducts( results );
    } catch ( error ) {
      console.error( "Error fetching products:", error );
      setProducts( [] ); // 👈 clear products on error
    } finally {
      setLoading( false ); // 👈 set loading to false after fetching
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-8">
      <h1 className="text-3xl font-bold text-purple-600 mb-6 text-center">
        Quick Commerce Product Search
      </h1>
      <p>Start typing to search for a product across apps!</p>

      <SearchBar onSearch={handleSearch} />
      {loading && <p className="mt-6 text-gray-500">Loading...</p>}

      {!loading && searched && products.length === 0 && (
        <div className="mt-10 flex flex-col items-center text-center text-gray-500">
          <img src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png" alt="No results" className="w-24 h-24 object-contain my-4" />
          <p className="text-lg font-medium">No products found</p>
          <p className="text-sm text-gray-400 mt-1">Try searching with different keywords.</p>
        </div>
      )}

      {!loading && products.length > 0 && (
        <ProductResults products={products} />
      )}
    </div>
  );
}

export default App;
