import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="flex bg-black text-white p-5 fixed overflow-hidden top-0 z-10 w-full">
        <Link
          to="/"
          className="font-serif tracking-widest font-black hover:text-green-300"
        >
          TRAVELWITHKASSA
        </Link>
        <div className="flex-grow text-right">
          <Link to="/about-me" className="px-2 hover:text-green-300">
            Who I am
          </Link>
          <Link to="/gallery" className="px-2 hover:text-green-300">
            Gallery
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
