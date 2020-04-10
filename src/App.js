import React from "react";
import LazyLoad from "react-lazyload";
import Intro from "./components/Intro.js";
import About from "./components/About.js";
import Resume from "./components/Resume.js";
import Education from "./components/Education.js";
import GetTouch from "./components/GetTouch.js";
import Skills from "./components/Skills.js";
import Projects from "./components/Projects.js";
import Gallery from "./components/Gallery.js";

export default function App() {
  return (
    <div id="wrapper">
      <Intro />
      <LazyLoad offset={50} once={true}>
        <About />
      </LazyLoad>
      <LazyLoad offset={100} once={true}>
        <Skills />
      </LazyLoad>
      <section>
        <header>
          <h2>Projects</h2>
        </header>
        <div className="content">
          <LazyLoad offset={50} once={true}>
            <Projects />
          </LazyLoad>
          <LazyLoad offset={100} once={true}>
            <Gallery />
          </LazyLoad>
        </div>
      </section>
      <LazyLoad offset={100} once={true}>
        <Education />
        <Resume />
        <GetTouch />
      </LazyLoad>
      <div className="copyright">© Arya Ziai</div>
    </div>
  );
}
