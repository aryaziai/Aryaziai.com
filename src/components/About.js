import React from "react";
export default function About() {
  return (
    <section id="first">
      <header>
        <h2>About Me</h2>
      </header>
      <div className="content">
        <p>
          <strong>Front-end software engineer</strong> located in the SF Bay
          Area with multiple years of web design experience. Dedicated to
          creating clean, maintainable, and discoverable code. Enjoys team
          building, learning new frameworks, and fixing bugs.
        </p>
        <span className="image main">
          <img src="images/pic02.jpg" alt="" />
        </span>
      </div>
    </section>
  );
}
