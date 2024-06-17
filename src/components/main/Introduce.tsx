import React from "react";
import Typewriter from "typewriter-effect";

function Introduce() {
  return (
    <div id="main" className="h-screen">
      <div className="bg-main relative w-screen h-[600px] bg-cover bg-bottom bg-no-repeat"></div>
      <div className="absolute bottom-10  w-full h-[100px] text-4xl text-center text-sky-200">
        <Typewriter
          options={{
            strings: ["안녕하세요", "프론트앤드 개발자 서지원 입니다."],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
}

export default Introduce;
