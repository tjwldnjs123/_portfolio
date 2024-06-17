import React from "react";
import MainContents from "../components/main/Main";
import AboutMe from "../components/aboutme/AboutMe";

function Main() {
  return (
    <div className="flex flex-col">
      <MainContents />
      <AboutMe />
    </div>
  );
}

export default Main;
