import { CiLink } from "react-icons/ci";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaYarn,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill, RiNpmjsFill, RiNextjsFill } from "react-icons/ri";
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
    <div id="skills" className="h-auto w-full p-10 bg-yellow-400">
      <div>
        <div className="flex justify-center items-center mb-20 ">
          <CiLink size={50} color="gray" />
          <p className="text-5xl">SKILLS</p>
        </div>

        <div className="grid grid-cols-4 gap-2 w-full mx-auto pb-20">
          <div className="col-span-1 h-[50%]  rounded-lg p-8 bg-white ">
            <p className=" pt-2 text-center border-b-2 border-orange-100 text-2xl text-orange-500  pb-2 xl:h-10">
              Core Web Technologies
            </p>
            <div className="grid auto-rows-[150px] grid-cols-2   gap-4  mt-8 ">
              <div className=" flex flex-col justify-center items-center  border border-slate-300 rounded-xl shadow-md ">
                <p className="text-[14px] font-semibold">HTML</p>
                <FaHtml5 size={80} color={"#fd4909"} />
              </div>
              <div className="col-span-1 flex flex-col justify-center items-center  border border-slate-300 rounded-xl shadow-md  ">
                <p className="text-[14px] font-semibold">CSS</p>
                <FaCss3Alt size={80} color="#2197f3" />
              </div>
              <div className="col-span-1 flex flex-col justify-center items-center  border border-slate-300 rounded-xl shadow-md ">
                <p className="text-[14px] font-semibold">JavaScript</p>
                <IoLogoJavascript size={80} color="#ffdf00" />
              </div>
              <div className="col-span-1   flex flex-col justify-center items-center  border border-slate-300 rounded-xl shadow-md  ">
                <p className="text-[14px] font-semibold">TypeScript</p>
                <IoLogoJavascript size={80} color="#3078c6" />
              </div>
            </div>
          </div>

          <div className="col-span-1  h-auto  rounded-lg p-8 bg-white ">
            <p className=" pt-2 text-center border-b-2 border-orange-100 text-2xl text-orange-500  pb-2 xl:h-10">
              Frameworks & Libraries
            </p>
            <div className=" grid grid-cols-2  gap-4 mt-8  items-center">
              <div className="col-span-1  flex flex-col justify-center items-center  border border-slate-300 rounded-xl shadow-md">
                <p className="text-[14px] font-semibold">React</p>
                <FaReact size={80} color={"#fd4909"} />
              </div>
              <div className="col-span-1  flex flex-col justify-center items-center  border border-slate-300 rounded-xl shadow-md">
                <p className="text-[14px] font-semibold"> Next.js</p>{" "}
                <RiNextjsFill size={80} color="#3078c6" />
              </div>
              <div className="col-span-2 flex items-center justify-center border border-slate-300 rounded-xl shadow-md py-2">
                <FaBootstrap size={40} color="#ffdf00" />
                <p className="text-[20px] font-semibold">Bootstrap</p>
              </div>
              <div className="col-span-2  flex items-center justify-center border border-slate-300 rounded-xl shadow-md py-2">
                <RiTailwindCssFill size={40} color="#3078c6" />
                <p className="text-[20px] font-semibold">Tailwind CSS</p>
              </div>
              <div className="col-span-2 flex items-center justify-center border border-slate-300 rounded-xl shadow-md py-2">
                <SiStyledcomponents size={40} color="#3078c6" />
                <p className="text-[20px] font-semibold"> Styled Components</p>
              </div>
              <div className="col-span-2 flex items-center justify-center border border-slate-300 rounded-xl shadow-md py-2">
                <AiOutlineAntDesign size={40} color="#3078c6" />
                <p className="text-[20px] font-semibold"> Ant Design</p>
              </div>
              <div className="col-span-2 flex items-center justify-center border border-slate-300 rounded-xl shadow-md py-2">
                <SiMui size={40} color="#3078c6" />
                <p className="text-[20px] font-semibold"> Material Ui</p>
              </div>
              <div className="col-span-2 flex items-center justify-center border border-slate-300 rounded-xl shadow-md py-2">
                <SiRedux size={40} color="#3078c6" />
                <p className="text-[20px] font-semibold"> Redux</p>
              </div>
              <div className="col-span-2 flex items-center justify-center border border-slate-300 rounded-xl shadow-md py-2">
                <p className="text-[20px] font-semibold">Redux toolkit</p>
              </div>
              <div className="col-span-2 flex items-center justify-center border border-slate-300 rounded-xl shadow-md py-2 ">
                <SiRecoil size={40} color="#3078c6" />
                <p className="text-[20px] font-semibold"> Recoil</p>
              </div>
              <div className="col-span-2 flex items-center justify-center border border-slate-300 rounded-xl shadow-md py-2">
                <SiReactquery size={40} color="#3078c6" />
                <p className="text-[20px] font-semibold"> React Query</p>
              </div>
            </div>
          </div>

          <div className="col-span-1   h-[70%]  rounded-lg p-8 bg-white  ">
            <p className="pt-2 text-center border-b-2 border-orange-100 text-2xl text-orange-500  pb-2 xl:h-10">
              Development Tools
            </p>
            <div className="grid auto-rows-[150px] grid-cols-2   gap-4  mt-8">
              <p className="flex flex-col justify-center items-center  border border-slate-300 rounded-xl shadow-md">
                <p className="text-[14px] font-semibold">Webpack</p>{" "}
                <SiWebpack size={80} color={"#fd4909"} />
              </p>
              <p className="flex flex-col justify-center items-center  border border-slate-300 rounded-xl shadow-md">
                <p className="text-[14px] font-semibold">Babel</p>{" "}
                <SiBabel size={80} color="#2197f3" />
              </p>
              <p className="flex flex-col justify-center items-center  border border-slate-300 rounded-xl shadow-md">
                <p className="text-[14px] font-semibold"> Npm</p>{" "}
                <RiNpmjsFill size={80} color="#ffdf00" />
              </p>
              <p className="flex flex-col justify-center items-center  border border-slate-300 rounded-xl shadow-md">
                <p className="text-[14px] font-semibold">Yarn</p>{" "}
                <FaYarn size={80} color="#3078c6" />
              </p>
              <p className="flex flex-col justify-center items-center  border border-slate-300 rounded-xl shadow-md">
                <p className="text-[14px] font-semibold"> ESLint</p>{" "}
                <SiEslint size={80} color="#3078c6" />
              </p>
              <p className="flex flex-col justify-center items-center  border border-slate-300 rounded-xl shadow-md">
                <p className="text-[14px] font-semibold"> Prettier</p>{" "}
                <SiPrettier size={80} color="#3078c6" />
              </p>
            </div>
          </div>

          <div className="col-span-1  h-[55%]  rounded-lg p-8 bg-white  ">
            <p className="pt-2 text-center border-b-2 border-orange-100 text-2xl text-orange-500  pb-2 xl:h-10">
              Collaboration Tools
            </p>
            <div className="grid auto-rows-[150px] grid-cols-2   gap-4  mt-8 ">
              <p className="flex flex-col justify-center items-center  border border-slate-300 rounded-xl shadow-md">
                <p className="text-[14px] font-semibold">Notion</p>
                <SiNotion size={80} color={"#fd4909"} />
              </p>
              <p className="flex flex-col justify-center items-center  border border-slate-300 rounded-xl shadow-md">
                <p className="text-[14px] font-semibold">Jira</p>
                <SiJira size={80} color="#2197f3" />
              </p>
              <p className="flex flex-col justify-center items-center  border border-slate-300 rounded-xl shadow-md">
                <p className="text-[14px] font-semibold">Slack</p>
                <SiSlack size={80} color="#ffdf00" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
