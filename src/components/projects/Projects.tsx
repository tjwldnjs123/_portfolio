import React from "react";
import { CiLink } from "react-icons/ci";
import projectData from "../../data/projects.json";
import { FaGithub, FaCheck } from "react-icons/fa";

function Projects() {
  return (
    <div id="projects" className="h-full w-full bg-gray-300">
      <div>
        <div className="flex  justify-center items-center mb-20 pt-10">
          <CiLink size={50} color="gray" />
          <p className="text-5xl ">PROJECTS</p>
        </div>
        {projectData.projects.map((data) => {
          return (
            <div
              key={data.name}
              className="w-[80%] h-auto xl:h-[800px]  mb-10 mx-auto bg-white rounded-xl  p-10 "
            >
              <div className="flex flex-col items-center mb-10">
                <p className="text-4xl">{data.name}</p>
                <p className="text-slate-600">
                  {`${data.period} (${data.personnel}) `}
                </p>
              </div>

              <div className="flex flex-col  w-full h-full  xl:flex-row">
                <div className="w-[80%] h-[40%] mx-auto xl:w-[50%] xl:h-[70%]">
                  <img
                    className=" bg-cover object-fill w-full h-full brightness-100 group-hover:brightness-50"
                    src={`${data.img}`}
                  />
                </div>

                <div className="mx-auto pt-10 w-[70%]  xl:p-10 xl:w-[50%] xl:h-[80%] xl:ml-10xl:rounded-xl ">
                  <p className="pb-10 text-lg">{data.content}</p>
                  <div className=" border-b border-slate-200 ">
                    <button
                      onClick={() => window.open(data.githubUrl, "_blank")}
                      className=" flex flex-row justify-center items-center cursor-pointer  border border-spacing-1 rounded-lg p-1 mb-5  hover:text-gray-500"
                    >
                      <FaGithub size={20} className="mr-2" />
                      <p className="text-lg ">github 바로가기</p>
                    </button>
                  </div>
                  <div className="flex mt-5 ">
                    <div className="flex  mr-8 min-w-[100px]">
                      <div className="mr-2 ">
                        <FaCheck />
                      </div>
                      <span className="font-semibold">Front-end</span>
                    </div>
                    <div className="min-w-[350px] ">
                      {data.stack.map((stack) => {
                        return <span>{`${stack}, `}</span>;
                      })}
                    </div>
                  </div>

                  {data?.back_stack && (
                    <div className="flex ">
                      <div className="flex  mr-8  min-w-[100px]">
                        <div className="mr-2">
                          <FaCheck />
                        </div>
                        <span className="font-semibold">Back-end</span>
                      </div>
                      <div className="min-w-[350px]">
                        {data?.back_stack?.map((stack) => {
                          return <span>{`${stack}, `}</span>;
                        })}
                      </div>
                    </div>
                  )}

                  <div className="flex mt-5">
                    <div className="flex  mr-8 min-w-[100px]">
                      <div className="mr-2">
                        <FaCheck />
                      </div>
                      <span className="font-semibold">주요기능</span>
                    </div>
                    <div>
                      {data.partsOfMe.map((description) => {
                        return <div>{`- ${description}`}</div>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
