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
  );
}
