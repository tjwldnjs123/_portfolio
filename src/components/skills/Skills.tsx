import React from "react";
import { CiLink } from "react-icons/ci";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaYarn,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill, RiNpmjsFill } from "react-icons/ri";
import {
  SiStyledcomponents,
  SiMui,
  SiRedux,
  SiRecoil,
  SiReactquery,
  SiWebpack,
  SiBabel,
  SiEslint,
  SiPrettier,
  SiNotion,
  SiJira,
  SiSlack,
} from "react-icons/si";
import { AiOutlineAntDesign } from "react-icons/ai";

function Skills() {
  return (
    <div id="skills" className="h-screen w-full">
      <div>
        <div className="flex justify-center items-center mb-10">
          <CiLink size={50} color="gray" />
          <p className="text-5xl ">SKILLS</p>
        </div>

        <div className="flex flex-row justify-around  w-[80%] mx-auto">
          <div className="w-[20%] h-auto border-2 border-gray-300 rounded-lg p-2 ">
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

          <div className="w-[20%] h-auto border-2 p-2 border-gray-300 rounded-lg ">
            <p className="h-10 pt-2 text-center border-b-2  border-gray-300">
              Frameworks & Libraries
            </p>
            <div className="flex flex-col  justify-around items-center mt-1 ">
              <p className="flex items-center">
                <FaReact size={30} color={"#fd4909"} /> React
              </p>
              <p className="flex items-center">
                {/* <FaCss3Alt size={30} color="#2197f3" />  */}
                Next.js
              </p>
              <p className="flex items-center">
                <FaBootstrap size={30} color="#ffdf00" /> Bootstrap
              </p>
              <p className="flex items-center">
                <RiTailwindCssFill size={30} color="#3078c6" /> Tailwind CSS
              </p>
              <p className="flex items-center">
                <SiStyledcomponents size={30} color="#3078c6" /> Styled
                Components
              </p>
              <p className="flex items-center">
                <AiOutlineAntDesign size={30} color="#3078c6" /> Ant Design
              </p>
              <p className="flex items-center">
                <SiMui size={30} color="#3078c6" /> Material Ui
              </p>
              <p className="flex items-center">
                <SiRedux size={30} color="#3078c6" /> Redux
              </p>
              <p className="flex items-center">Redux toolkit</p>
              <p className="flex items-center">
                <SiRecoil size={30} color="#3078c6" /> Recoil
              </p>
              <p className="flex items-center">
                <SiReactquery size={30} color="#3078c6" /> React Query
              </p>
            </div>
          </div>
          {/* test */}
          <div className="w-[20%] h-auto border-2 border-gray-300 rounded-lg p-2 ">
            <p className="h-10 pt-2 text-center border-b-2  border-gray-300">
              Development Tools
            </p>
            <div className="flex flex-col h-[80%] justify-around items-center mt-1 ">
              <p className="flex items-center">
                <SiWebpack size={30} color={"#fd4909"} /> Webpack
              </p>
              <p className="flex items-center">
                <SiBabel size={30} color="#2197f3" /> Babel
              </p>
              <p className="flex items-center">
                <RiNpmjsFill size={30} color="#ffdf00" /> Npm
              </p>
              <p className="flex items-center">
                <FaYarn size={30} color="#3078c6" /> Yarn
              </p>
              <p className="flex items-center">
                <SiEslint size={30} color="#3078c6" /> ESLint
              </p>
              <p className="flex items-center">
                <SiPrettier size={30} color="#3078c6" /> Prettier
              </p>
            </div>
          </div>

          <div className="w-[20%] h-auto border-2 border-gray-300 rounded-lg p-2 ">
            <p className="h-10 pt-2 text-center border-b-2  border-gray-300">
              Collaboration Tools
            </p>
            <div className="flex flex-col h-[80%] justify-around items-center mt-1 ">
              <p className="flex items-center">
                <SiNotion size={30} color={"#fd4909"} /> Notion
              </p>
              <p className="flex items-center">
                <SiJira size={30} color="#2197f3" /> Jira
              </p>
              <p className="flex items-center">
                <SiSlack size={30} color="#ffdf00" /> Slack
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
