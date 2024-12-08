import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="night flex items-center justify-center min-h-screen bg-gray-900">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Wanna play a small quiz?</h1>
        <p className="mb-6">(It will be fun with a reward in the end)</p>
        <button
          onClick={() => navigate("/quiz")}
          className="px-8 py-3 text-2xl font-semibold text-white bg-purple-500 rounded-lg hover:bg-purple-700 transition duration-300"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Home;
