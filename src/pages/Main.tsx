import React from "react";
import MainContents from "../components/main/Main";
import AboutMe from "../components/aboutme/AboutMe";
import Skills from "../components/skills/Skills";

function Main() {
  return (
    <div className="flex flex-col">
      <MainContents />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default Main;
