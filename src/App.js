import { useState } from "react";
import "./App.css";
import logo from "./Image/logo.png";

function App() {
  const [clickHandle, setClickHandle] = useState(true);
  return (
    <div>
      <header className="w-full bg-[#1F2837] h-[10vh] items-center justify-center flex ">
        <div className="container mx-3">
          <nav className="flex justify-between">
            <div className="flex items-center">
              <img className="w-[2rem]" src={logo} alt="" />
              <h1 className="text-[15px] text-white font-[600] pl-[8px]">
                CodeWithThunder
              </h1>
            </div>
            <ul className="hidden md:flex">
              <li className="text-white px-[20px] font-[600]">Dashbord</li>
              <li className="text-white px-[20px] font-[600]">Home</li>
              <li className="text-white px-[20px] font-[600]">About</li>
              <li className="text-white px-[20px] font-[600]">Team</li>
              <li className="text-white px-[20px] font-[600]">Skils</li>
              <li className="text-white px-[20px] font-[600]">Contact</li>
            </ul>
            <div className="flex md:hidden text-white">
              <svg
                onClick={() => setClickHandle(!clickHandle)}
                class="h-6 w-6 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <div
              className={
                clickHandle
                  ? "hidden"
                  : "block md:hidden bg-[#1F2837] rounded-b-[8px] absolute top-[3.5rem] right-[2rem]"
              }
            >
              <ul className="px-[1.75rem] pt-3 pb-3 text-center space-y-1">
                <li className="text-white block cursor-pointer py-2 px-3 font-[600]">
                  Dashbord
                </li>
                <li className="text-white block cursor-pointer py-2 px-3 font-[600]">
                  Home
                </li>
                <li className="text-white block cursor-pointer py-2 px-3 font-[600]">
                  About
                </li>
                <li className="text-white block cursor-pointer py-2 px-3 font-[600]">
                  Team
                </li>
                <li className="text-white block cursor-pointer py-2 px-3 font-[600]">
                  Skils
                </li>
                <li className="text-white block cursor-pointer py-2 px-3 font-[600]">
                  Contact
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default App;
