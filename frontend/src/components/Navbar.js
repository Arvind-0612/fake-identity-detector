import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Fake Identity Detector</h1>
        <div>
          <Link to="/" className="mx-2">Home</Link>
          <Link to="/detect" className="mx-2">Detect</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
