import React from "react";
import "./App.css";
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
      <div>
        <title>Arya Ziai | Front-End Software Engineer</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <meta name="description" content />
        <meta name="keywords" content />
        <link rel="stylesheet" href="assets/css/main.css" />
        <link rel="icon" href="favicon-96x96.png" type="image/gif" />
        <div id="wrapper">
          <section className="intro">
            <header>
              <h1>Arya Ziai</h1>
              <p>Front-End Software Engineer</p>
              <a href="https://twitter.com/aryaziai" target="_blank">
                @aryaziai
              </a>
              <p />
              <ul className="actions">
                <li>
                  <a href="#first" className="arrow scrolly">
                    <span className="label">Next</span>
                  </a>
                </li>
              </ul>
            </header>
            <div className="content">
              <span className="image fill" data-position="center">
                <img src="images/pic01.jpg" alt="" />
              </span>
            </div>
          </section>
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
                  euismod egestas. Pellentesque sapien ac quam. Lorem ipsum
                  dolor sit nullam.
                </p>
              </div>
              <Projects />
              <section>
                <header>
                  <h3>Nisl consequat</h3>
                  <p>
                    Aenean ornare velit lacus, ac varius enim ullamcorper eu.
                    Proin aliquam sed facilisis ante interdum congue. Integer
                    mollis, nisl amet convallis, porttitor magna ullamcorper,
                    amet mauris. Ut magna finibus nisi nec lacinia ipsum
                    maximus.
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
    </div>
  );
}
// }
