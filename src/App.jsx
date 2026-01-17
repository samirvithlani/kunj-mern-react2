import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppRoutes from "./components/router/AppRoutes";
//import './App.css'

function App() {
  return (
    <>
      <div className="bg-blue-200 p-6 text-red-500">
        <button className="bg-[#FE7F96] rounded mt-4 p-6 text-2xl font-bold">ADD</button>
        <AppRoutes></AppRoutes>
      </div>
    </>
  );
}

export default App;
