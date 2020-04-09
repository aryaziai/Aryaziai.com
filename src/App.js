import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  render() {
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
          {/* Wrapper */}
          <div id="wrapper">
            {/* Intro */}
            <section className="intro">
              <header>
                <h1>Arya Ziai</h1>
                <p>Front-End Software Engineer</p>
                {/* <span class="blinktext">_</span> */}
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
            {/* Section */}
            <section id="first">
              <header>
                <h2>About Me</h2>
                {/* <p><b>Location</b><br/> 
			<span class="smallspace"></span>
			SF Bay Area</p> */}
              </header>
              <div className="content">
                <p>
                  <strong>Front-End software engineer</strong> located in the SF
                  Bay Area with multiple years of web design experience.
                  Dedicated to creating clean, maintainable and discoverable
                  code. Enjoy team building, learning new frameworks, and fixing
                  bugs.
                </p>
                <span className="image main">
                  <img src="images/pic02.jpg" alt="" />
                </span>
              </div>
            </section>
            {/* Section */}
            <section>
              <header>
                <h2>Skills</h2>
                <p>
                  Javascript
                  <br />
                  ReactJS <br />
                  React Native <br />
                  Ruby on Rails <br />
                  REST API <br />
                  Wordpress <br />
                  HTML5 <br />
                  Figma <br />
                  CSS <br />
                  SQL <br />
                  Git
                </p>
              </header>
              <div className="content">
                <p>
                  <strong>Passion for creating</strong> responsive and
                  lightweight sites. this is filler text. this is filler text.
                  this is filler text.
                </p>
                <ul className="feature-icons">
                  <li className="icon solid fa-laptop">Responsive Design</li>
                  <li className="icon solid fa-bolt">Fast Load Times</li>
                  <li className="icon solid fa-code">Clean Code</li>
                  <li className="icon solid fa-lightbulb">
                    Intuitive Experience
                  </li>
                  <li className="icon solid fa-users">Collaborative</li>
                  <li className="icon solid fa-th">Pixel-Perfect</li>
                </ul>
                <p>
                  Vehicula ultrices sed ultricies condimentum. Magna sed etiam
                  consequat, et lorem adipiscing sed nulla. Volutpat nisl et
                  tempus et dolor libero, feugiat magna tempus, sed et lorem
                  adipiscing.
                </p>
              </div>
            </section>
            {/* Section */}
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
                {/* Section */}
                <section>
                  <header>
                    <h3>
                      <a
                        href="https://aryaziai.github.io/Fetch/"
                        target="_blank"
                      >
                        Fetch
                      </a>
                    </h3>
                    <div className="hidedesktop">
                      <div className="gallery">
                        <a
                          href="https://aryaziai.github.io/Fetch/"
                          target="_blank"
                          className="landscape"
                        >
                          <img src="images/fetch.png" alt="" />
                        </a>
                        <br />
                      </div>
                    </div>
                    <p>
                      Fetch news via Google API in topics users specify with
                      customized parameters - Users can remove articles from
                      feed, which deletes article from db and state in React -
                      Share articles via iMessage and Email, auto-populates
                      content with respective article
                      <br />
                      <b>Utilized:</b> React, Google API, JSON Web Tokens,
                      localStorage, Rails API
                    </p>
                    <br />
                    <br />
                    <h3>
                      {" "}
                      <a
                        href="https://aryaziai.github.io/JS-Paint/"
                        target="_blank"
                      >
                        JSPaint
                      </a>
                    </h3>
                    <div className="hidedesktop">
                      <div className="gallery">
                        <a
                          href="https://aryaziai.github.io/JS-Paint/"
                          target="_blank"
                          className="landscape"
                        >
                          <img src="images/gallery/thumbs/01.png" alt="" />
                        </a>
                        <br />
                      </div>
                    </div>
                    <p>
                      - Developed with vanilla JavaScript front-end and Rails
                      API backend - Users can add/remove drawings from their
                      profile
                      <br />
                      <b>Utilized:</b> HTML Canvas, eventListeners, CSS, Rails
                      API, Git, Heroku
                    </p>
                    <br />
                    <br />
                    <h3>
                      {" "}
                      <a
                        href="https://movie-reviewer-rb.herokuapp.com/"
                        target="_blank"
                      >
                        Movie Reviewer
                      </a>
                    </h3>
                    <div className="hidedesktop">
                      <div className="gallery">
                        <a
                          href="https://movie-reviewer-rb.herokuapp.com/"
                          target="_blank"
                          className="landscape"
                        >
                          <img src="images/gallery/thumbs/01.png" alt="" />
                        </a>
                        <br />
                      </div>
                    </div>
                    <p>
                      - Application built solely on rails with full CRUD
                      capabilities - Reviews are a many to many relationship
                      between users and pre-seeded movie data
                      <br />
                      <b>Utilized:</b> Ruby on Rails, Embedded Ruby, PostgreSQL,
                      Git, Heroku
                    </p>
                  </header>
                  <div className="hidemobile">
                    <div className="content">
                      <div className="gallery">
                        <a
                          href="https://aryaziai.github.io/Fetch/"
                          target="_blank"
                          className="landscape"
                        >
                          <img src="images/fetch.png" alt="" />
                        </a>
                        <a
                          href="https://aryaziai.github.io/Fetch/"
                          target="_blank"
                          className="landscape"
                        >
                          <img src="images/gallery/thumbs/01.png" alt="" />
                        </a>
                        <a
                          href="https://aryaziai.github.io/Fetch/"
                          target="_blank"
                          className="landscape"
                        >
                          <img src="images/gallery/thumbs/01.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
                {/* Section */}
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
                      <a
                        href="images/gallery/fulls/05.jpg"
                        className="landscape"
                      >
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
                {/* Section */}
                <section>
                  <header>
                    <h3>Lorem gravida</h3>
                    <p>
                      Proin aliquam facilisis ante interdum. Sed nulla amet
                      lorem feugiat tempus aenean ornare velit lacus, ac varius
                      sed enim lorem ullamcorper dolore. ac varius enim lorem
                      ullamcorper dolore. Proin aliquam facilisis.
                    </p>
                  </header>
                  <div className="content">
                    <div className="gallery">
                      <a
                        href="images/gallery/fulls/08.jpg"
                        className="portrait"
                      >
                        <img src="images/gallery/thumbs/08.jpg" alt="" />
                      </a>
                      <a
                        href="images/gallery/fulls/09.jpg"
                        className="portrait"
                      >
                        <img src="images/gallery/thumbs/09.jpg" alt="" />
                      </a>
                      <a
                        href="images/gallery/fulls/10.jpg"
                        className="landscape"
                      >
                        <img src="images/gallery/thumbs/10.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                </section>
              </div>
            </section>
            <section>
              <header>
                <h2>Education</h2>
              </header>
              <div className="content">
                <span className="smallspace" />
                <i>Class of 2020 </i>
                <br />
                <b>Flatiron School, San Francisco</b>
                <br />
                Software Engineer
                <p />
                <p>
                  <i>Class of 2014</i> <br />
                  <b>University of California, Los Angeles</b>
                  <br />
                  Bachelor of Arts, <br />
                  Cultural Anthropology
                </p>
              </div>
            </section>
            <section>
              <header>
                <h2>Resumé</h2>
              </header>
              <div className="content">
                <p>
                  <strong>Check out</strong> my software engineering resumé to
                  see my
                  <br />
                  most recent work experience &amp; projects.
                  {/* ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim
            lorem ullamcorper dolore. */}
                </p>
                <ul className="actions">
                  <li>
                    <a
                      href="/Arya_Ziai_Resume.pdf"
                      alt="hello"
                      target="_blank"
                      className="button primary large"
                    >
                      View
                    </a>
                  </li>
                  <li>
                    <a
                      href="/Arya_Ziai_Resume.pdf"
                      className="button large"
                      download="Arya Ziai Resume"
                    >
                      Download
                    </a>
                  </li>
                </ul>
              </div>
            </section>
            <section>
              <header>
                <h2>Get in touch</h2>
              </header>
              <ul className="items">
                <li>
                  <h3>Email</h3>
                  <a
                    href="mailto:arya@aryaziai.com?Subject=Hey%20there!"
                    target="_top"
                  >
                    arya@aryaziai.com
                  </a>
                </li>
                <li>
                  <h3>Phone</h3>
                  <a href="tel:+4157548665">415.754.8665</a>
                </li>
                <li>
                  <h3>Location</h3>
                  <span>SF Bay Area</span>
                </li>
                <li>
                  <h3>Links</h3>
                  <ul className="icons">
                    <li>
                      <a
                        href="https://github.com/aryaziai"
                        target="_blank"
                        className="icon brands fa-github"
                      >
                        <span className="label">GitHub</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/aryaziai"
                        target="_blank"
                        className="icon brands fa-twitter"
                      >
                        <span className="label">Twitter</span>
                      </a>
                    </li>
                    {/* <li>
                <a href="#" class="icon brands fa-facebook-f"
                  ><span class="label">Facebook</span></a
                >
              </li>
              <li>
                <a href="#" class="icon brands fa-instagram"
                  ><span class="label">Instagram</span></a
                >
              </li> */}
                    <li>
                      <a
                        href="https://www.linkedin.com/in/aryaziai/"
                        target="_blank"
                        className="icon brands fa-linkedin-in"
                      >
                        <span className="label">LinkedIn</span>
                      </a>
                    </li>
                    {/* <li>
                <a href="#" class="icon brands fa-codepen"
                  ><span class="label">Codepen</span></a
                >
              </li> */}
                  </ul>
                </li>
              </ul>
              {/* <footer>
          <ul class="items">
            <li>
              <h3>Email</h3>
              <a href="#">information@untitled.ext</a>
            </li>
            <li>
              <h3>Phone</h3>
              <a href="#">(000) 000-0000</a>
            </li>
            <li>
              <h3>Address</h3>
              <span>1234 Somewhere Road, Nashville, TN 00000</span>
            </li>
            <li>
              <h3>Elsewhere</h3>
              <ul class="icons">
                <li>
                  <a href="#" class="icon brands fa-twitter"
                    ><span class="label">Twitter</span></a
                  >
                </li>
                <li>
                  <a href="#" class="icon brands fa-facebook-f"
                    ><span class="label">Facebook</span></a
                  >
                </li>
                <li>
                  <a href="#" class="icon brands fa-instagram"
                    ><span class="label">Instagram</span></a
                  >
                </li>
                <li>
                  <a href="#" class="icon brands fa-linkedin-in"
                    ><span class="label">LinkedIn</span></a
                  >
                </li>
                <li>
                  <a href="#" class="icon brands fa-github"
                    ><span class="label">GitHub</span></a
                  >
                </li>
                <li>
                  <a href="#" class="icon brands fa-codepen"
                    ><span class="label">Codepen</span></a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </footer> */}
            </section>
            {/* Copyright */}
            <div className="copyright">© Arya Ziai</div>
          </div>
          {/* Scripts */}
        </div>
      </div>
    );
  }
}
