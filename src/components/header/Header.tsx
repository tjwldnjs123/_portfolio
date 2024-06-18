import React from "react";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

function Header() {
  const navigate = useNavigate();
  const goMain = () => {
    navigate("/");
  };

  return (
    <div className="fixed top-0  flex flex-row justify-center w-full h-16 bg-sky-100 z-10">
      <div className="flex flex-row justify-around items-center w-[80%]">
        <div className="w-[15%]  text-3xl">
          <Link to="main" smooth={true}>
            <div className="cursor-pointer" onClick={goMain}>
              JiWon
            </div>
          </Link>
        </div>
        <div className="flex flex-row  w-[70%] text-2xl">
          <div className="mr-10">
            <Link to="aboutme" smooth={true} offset={-104}>
              <div className="cursor-pointer">About me</div>
            </Link>
          </div>
          <div className="mr-10">
            <Link to="skills" smooth={true} offset={-120}>
              <div className="cursor-pointer">Skills</div>
            </Link>
          </div>
          <div className="mr-10">
            <Link to="projects" smooth={true} offset={-160}>
              <div className="cursor-pointer">Projects</div>
            </Link>
          </div>
        </div>
        <div className="w-[5%]">
          <a href="https://github.com/tjwldnjs123" target="_blank">
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
