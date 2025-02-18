import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Fake Identity Detector</h1>
      <p className="text-lg mb-6">Protect yourself from fake profiles and scams on social media and job portals.</p>
      <Link to="/detect" className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">
        Start Detection
      </Link>
    </div>
  );
}

export default Home;
