import React from "react";
export default function Intro() {
  return (
    <section className="intro">
      <header>
        <h1>Arya Ziai</h1>
        <p>Front-End Software Engineer</p>
        <a
          href="https://twitter.com/aryaziai"
          target="_blank"
          rel="noopener noreferrer"
        >
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
          {/* <img src="images/pic01.jpg" alt="" /> */}
        </span>
      </div>
    </section>
  );
}
