import React from "react";
import LazyLoad from "react-lazyload";
import Intro from "./components/Intro.js";
import About from "./components/About.js";
import Resume from "./components/Resume.js";
import Education from "./components/Education.js";
import GetTouch from "./components/GetTouch.js";
import Skills from "./components/Skills.js";
import Projects from "./components/Projects.js";
import Clients from "./components/Clients.js";

export default function App() {
  return (
    <div id="wrapper">
      <Intro />
      <LazyLoad offset={50} once={true}>
        <About />
      </LazyLoad>
      <LazyLoad offset={200} once={true}>
        <Skills />
      </LazyLoad>
      <LazyLoad offset={401} once={true}>
        <Projects />
      </LazyLoad>
      <Clients />
      <Education />
      <Resume />
      <GetTouch />
      <div className="copyright">© Arya Ziai. Built with ReactJS.</div>
    </div>
  );
}
