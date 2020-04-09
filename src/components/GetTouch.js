import React from "react";
export default function GetTouch() {
  return (
    <section>
      <header>
        <h2>Get in touch</h2>
      </header>
      <ul className="items">
        <li>
          <h3>Email</h3>
          <a href="mailto:arya@aryaziai.com?Subject=Hey%20there!" target="_top">
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
            <li>
              <a
                href="https://www.linkedin.com/in/aryaziai/"
                target="_blank"
                className="icon brands fa-linkedin-in"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
