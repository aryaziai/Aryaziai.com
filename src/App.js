import React from "react";
import LazyLoad from "react-lazyload";
import "./App.css";
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
      <LazyLoad offset={100} once={true}>
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
          <div className="hidemobile">
            <p>
              <strong>Integer mollis egestas</strong> nam maximus erat id
              euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor
              sit nullam.
            </p>
          </div>
          <LazyLoad offset={100} once={true}>
            <Projects />
          </LazyLoad>
          <LazyLoad offset={100} once={true}>
            <Gallery />
          </LazyLoad>
          <section>
            <header>
              <h3>Lorem gravida</h3>
              <p>
                Proin aliquam facilisis ante interdum. Sed nulla amet lorem
                feugiat tempus aenean ornare velit lacus, ac varius sed enim
                lorem ullamcorper dolore. ac varius enim lorem ullamcorper
                dolore. Proin aliquam facilisis.
              </p>
            </header>
            <div className="content">
              <div className="gallery">
                <a href="images/gallery/fulls/08.jpg" className="portrait">
                  <img src="images/gallery/thumbs/08.jpg" alt="" />
                </a>
                <a href="images/gallery/fulls/09.jpg" className="portrait">
                  <img src="images/gallery/thumbs/09.jpg" alt="" />
                </a>
                <a href="images/gallery/fulls/10.jpg" className="landscape">
                  <img src="images/gallery/thumbs/10.jpg" alt="" />
                </a>
              </div>
            </div>
          </section>
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
// }
