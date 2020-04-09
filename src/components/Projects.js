import React from "react";
export default function Projects() {
  return (
    <section>
    <header>
      <h3>
        <a href="https://aryaziai.github.io/Fetch/" target="_blank">
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
        customized parameters - Users can remove articles from feed,
        which deletes article from db and state in React - Share
        articles via iMessage and Email, auto-populates content with
        respective article
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
        - Developed with vanilla JavaScript front-end and Rails API
        backend - Users can add/remove drawings from their profile
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
  );
}
