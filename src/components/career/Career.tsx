import careerData from "../../data/career.json";
import { CiLink } from "react-icons/ci";

function Career() {
  return (
    <div id="career" className="h-screen">
      <div>
        <div className="flex  justify-center items-center mb-20 pt-10">
          <CiLink size={50} color="gray" />
          <p className="text-5xl ">CAREER</p>
        </div>
        <div className="flex flex-col items-center">
          {careerData.career.map((companyData) => {
            return (
              <div className="w-[80%] h-auto flex mb-10 ">
                <div className="w-[30%] ">{companyData.img}</div>

                <div className="border-l border-slate-300"></div>

                <div className="w-[60%] ml-10">
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
                          <p>{work.title}</p>
                          <br />
                          {work.contents.map((description) => {
                            return <p>{description}</p>;
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
