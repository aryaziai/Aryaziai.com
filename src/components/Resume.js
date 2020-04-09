import React from "react";
export default function Resume() {
  return (
    <section>
      <header>
        <h2>Resumé</h2>
      </header>
      <div className="content">
        <p>
          <strong>Check out</strong> my software engineering resumé to see my
          most recent work experience &amp; projects.
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
  );
}
