import React from 'react';
import { Link } from 'react-router-dom';
  
  const Header = () => (
  <header className="p-3 sticky top-0 z-10">
    <div className="flex items-center justify-between flex-wrap">
      <div className="block">
        <Link to="/"><span className="font-semibold text-xl tracking-tight text-gray-800">@fzoozai</span></Link>
      </div>
      <nav className="block">
        <Link to="/"><span className="inline-block text-gray-800 hover:text-gray-600 mr-3 navitem bg-blue_dracula_light border-blue_dracula border-2 font-bold font-primary">Home</span></Link>
        <Link to="/About"><span className="inline-block text-gray-800 hover:text-gray-600 mr-3 navitem bg-blue_dracula_light border-blue_dracula border-2 font-bold font-primary">About</span></Link>
        <Link to="/Contact"><span className="inline-block text-gray-800 hover:text-gray-600 mr-3 navitem bg-blue_dracula_light border-blue_dracula border-2 font-bold font-primary">Contact</span></Link>
      </nav>
    </div>
  </header>
);

export default Header;