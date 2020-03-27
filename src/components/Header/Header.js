import React from 'react';
import {Link} from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/">Dogs!</Link>
      <Link to="/favourites">Favourites</Link>
    </div>
  );
}

export default Header;