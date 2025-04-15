import React, { useState } from "react";

function SearchBar( { onSearch } ) {
  const [ query, setQuery ] = useState( "" );

  const handleInputChange = ( event ) => {
    setQuery( event.target.value );
  };

  const handleSubmit = ( e ) => {
    e?.preventDefault();
    onSearch( query );
    if ( query.trim() !== "" ) {
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-lg mt-4"
    >
      <input
        type="text"
        placeholder="Search for a product..."
        value={query}
        onChange={handleInputChange}
        className="w-full sm:w-2/3 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Search
      </button>

    </form>
  );
}

export default SearchBar;
