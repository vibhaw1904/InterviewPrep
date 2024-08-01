import React, { useState } from 'react';

const SearchUsers = ({setQuery,query}) => {
  

  return (
    <div className="flex justify-center my-4">
      <input
        type="search"
        placeholder="Search users..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full max-w-md"
      />
    </div>
  );
}

export default SearchUsers;
