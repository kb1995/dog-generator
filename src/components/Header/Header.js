import React from 'react';
import {Link} from "react-router-dom";

function Header() {
  return (
    <div>
      <Link exact to="/">Dogs!</Link>
      <Link to="/favourite-doggos">Favourites</Link>
    </div>
  );
}

export default Header;