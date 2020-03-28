import React from 'react';
import {Link} from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center my-8">
      <Link className="font-bold text-xl hover:text-gray-800 transition duration-150" to="/">Generate dogs</Link>
      <Link className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out duration-150" to="/favourites">Favourites</Link>
    </div>
  );
}

export default Header;