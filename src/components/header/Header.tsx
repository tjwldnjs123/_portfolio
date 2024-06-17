import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="fixed top-0  flex flex-row justify-center w-full h-16 bg-sky-100 z-10">
      <div className="flex flex-row justify-around items-center w-[80%]">
        <div className="w-[10%]  text-3xl">JiWon</div>
        <div className="w-[80%] text-2xl">
          <ul>
            <li>About me</li>
          </ul>
        </div>
        <div className="w-[10%]">
          <a href="https://github.com/tjwldnjs123" target="_blank">
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
