import React from 'react';
import { Link } from 'react-router-dom';
  
  const Header = () => (
  <header className="bg-gray-100 p-3">
    <div className="flex items-center justify-between flex-wrap">
      <div className="block">
        <Link to="/"><span className="font-semibold text-xl tracking-tight text-gray-800">@fzoozai</span></Link>
      </div>
      <nav className="block">
        <Link to="/"><span className="inline-block text-gray-800 hover:text-gray-600 mr-3 navitem font-mono">Home</span></Link>
        <Link to="/About"><span className="inline-block text-gray-800 hover:text-gray-600 mr-3 navitem font-mono">About</span></Link>
        <Link to="/Contact"><span className="inline-block text-gray-800 hover:text-gray-600 mr-3 navitem font-mono">Contact</span></Link>
      </nav>
      <div className="tags">
      </div>
    </div>
  </header>
);

export default Header;