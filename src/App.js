import React from "react";
import "./App.css";
import Intro from "./components/Intro.js";
import About from "./components/About.js";
import Resume from "./components/Resume.js";
import Education from "./components/Education.js";
import GetTouch from "./components/GetTouch.js";
import Skills from "./components/Skills.js";
import Projects from "./components/Projects.js";

export default function App() {
  // componentDidMount() {
  //   fetch("https://fetch-backend-api.herokuapp.com");
  //   fetch("https://movie-reviewer-rb.herokuapp.com/");
  //   fetch("https://js-paint-backend.herokuapp.com/");
  // }

  // render() {
  return (
    <div>
      <div id="wrapper">
        <Intro />
        <About />
        <Skills />
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
            <Projects />
            <section>
              <header>
                <h3>Nisl consequat</h3>
                <p>
                  Aenean ornare velit lacus, ac varius enim ullamcorper eu.
                  Proin aliquam sed facilisis ante interdum congue. Integer
                  mollis, nisl amet convallis, porttitor magna ullamcorper, amet
                  mauris. Ut magna finibus nisi nec lacinia ipsum maximus.
                </p>
              </header>
              <div className="content">
                <div className="gallery">
                  <a href="images/gallery/fulls/05.jpg" className="landscape">
                    <img src="images/gallery/thumbs/05.jpg" alt="" />
                  </a>
                  <a href="images/gallery/fulls/06.jpg">
                    <img src="images/gallery/thumbs/06.jpg" alt="" />
                  </a>
                  <a href="images/gallery/fulls/07.jpg">
                    <img src="images/gallery/thumbs/07.jpg" alt="" />
                  </a>
                </div>
              </div>
            </section>
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
        <Education />
        <Resume />
        <GetTouch />
        <div className="copyright">© Arya Ziai</div>
      </div>
    </div>
  );
}
// }
