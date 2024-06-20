import Typewriter from "typewriter-effect";

function Main() {
  return (
    <div id="main" className="w-full h-screen overflow-hidden">
      <div className="bg-main relative w-screen h-[80%] bg-cover bg-bottom bg-no-repeat"></div>
      <div className="absolute bottom-5  w-full h-[100px] text-3xl  text-center text-sky-200">
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

export default Main;
