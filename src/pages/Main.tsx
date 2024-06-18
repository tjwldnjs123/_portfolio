import MainContents from "../components/main/Main";
import AboutMe from "../components/aboutme/AboutMe";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";

function Main() {
  return (
    <div className="flex flex-col">
      <MainContents />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}

export default Main;
