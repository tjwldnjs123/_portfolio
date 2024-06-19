import careerData from "../../data/career.json";
import { CiLink } from "react-icons/ci";

function Career() {
  return (
    <div id="career" className="h-screen ">
      <div className="">
        <div className="flex  justify-center items-center mb-20 pt-10">
          <CiLink size={50} color="gray" />
          <p className="text-5xl ">CAREER</p>
        </div>
        <div className="flex flex-col ml-[30%]">
          {careerData.career.map((companyData) => {
            return (
              <div className="w-[80%] h-auto flex mb-10  ">
                <div className="w-[20%] h-[20%] mr-10  ">
                  <img
                    className=" bg-cover object-fill w-full h-full brightness-100 group-hover:brightness-50"
                    src={`https://tjwldnjs123.github.io/_portfolio/${companyData.img}`}
                    alt="회사 로고"
                  />
                </div>

                <div className="border-l border-slate-300"></div>

                <div className="w-[50%] ml-10">
                  <p className="text-2xl">{companyData.company}</p>
                  <p className="text-xm text-gray-500">{companyData.period}</p>
                  <br />
                  <p>{companyData.description}</p>
                  <br />
                  <br />
                  <div className="">
                    {companyData.contents.map((work) => {
                      return (
                        <div className="mb-5">
                          <p className="underline underline-offset-8 decoration-[.5px] mb-2">
                            {work.title}
                          </p>

                          {work.contents.map((description) => {
                            return <p>{`- ${description}`}</p>;
                          })}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Career;
