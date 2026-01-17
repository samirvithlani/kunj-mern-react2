import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppRoutes from "./components/router/AppRoutes";
//import './App.css'

function App() {
  return (
    <>
      <div>
        <button className="bg-[#FE7F96] rounded mt-4 p-6 text-2xl font-bold">ADD</button>
        <div className="min-h-screen bg-gray-100 p6">
          <div className="flex gap-4 justify-center items-center p-50">
            <div className="bg-yellow-400 p-6 rouned shadow h-100 w-100">
              BOX 1
            </div>
            <div className="bg-red-700 p-6 rouned shadow h-100 w-100">
              BOX 2
            </div>
            <div className="bg-pink-900 p-6 rouned shadow h-100 w-100">
              BOX 3
            </div>
          </div>
        </div>
        <AppRoutes></AppRoutes>
      </div>
    </>
  );
}

export default App;
