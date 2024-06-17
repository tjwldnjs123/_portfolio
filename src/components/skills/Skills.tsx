import React from "react";
import { CiLink } from "react-icons/ci";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

function Skills() {
  return (
    <div id="skills" className="h-screen">
      <div>
        <div className="flex justify-center items-center mb-10">
          <CiLink size={50} color="gray" />
          <p className="text-5xl ">SKILLS</p>
        </div>

        <div>
          <div className="w-[20%] h-[220px] border-2 border-gray-300 rounded-lg ">
            <p className="h-10 pt-2 text-center border-b-2  border-gray-300">
              Core Web Technologies
            </p>
            <div className="flex flex-col h-[80%] justify-around items-center mt-1 ">
              <p className="flex items-center">
                <FaHtml5 size={30} color={"#fd4909"} /> HTML
              </p>
              <p className="flex items-center">
                <FaCss3Alt size={30} color="#2197f3" /> CSS
              </p>
              <p className="flex items-center">
                <IoLogoJavascript size={30} color="#ffdf00" /> JavaScript
              </p>
              <p className="flex items-center">
                <IoLogoJavascript size={30} color="#3078c6" /> TypeScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
