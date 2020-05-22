import React from "react";
export default function Clients() {
  return (
    <section>
      <header>
        <h2>Clients</h2>
      </header>
      <div className="content">
        <div className="gallery">
          {/* <h3>
            <a
              href="https://aryaziai.github.io/Fetch/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fetch
            </a>
          </h3> */}

          <a
            // href="https://aryaziai.github.io/Fetch/"
            // target="_blank"
            // rel="noopener noreferrer"
            className="landscape"
          >
            <img src="images/vegfit_logo.png" alt="" />
          </a>

          {/* <p>
            Fetch news via Google API in topics users specify with customized
            parameters - Users can remove articles from feed, which deletes
            article from db and state in React - Share articles via iMessage and
            Email, auto-populates content with respective article
            <span className="utilized">
              <b>Utilized:</b> React, Google API, JSON Web Tokens, localStorage,
              Rails API
            </span>
          </p> */}

          {/* <h3>
            <a
              href="https://aryaziai.github.io/JS-Paint/"
              target="_blank"
              rel="noopener noreferrer"
            >
              JSPaint
            </a>
          </h3> */}

          <a
            href="https://aryaziai.github.io/JS-Paint/"
            target="_blank"
            rel="noopener noreferrer"
            className="landscape"
          >
            <img src="images/jspaint.png" alt="" />
          </a>

          {/* <p>
            Developed with vanilla JavaScript front-end and Rails API backend -
            Users can add/remove drawings from their profile
            <span className="utilized">
              <b>Utilized:</b> HTML Canvas, eventListeners, CSS, Rails API, Git,
              Heroku
            </span>
          </p> */}

          {/* <h3>
            <a
              href="https://movie-reviewer-rb.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Movie Reviewer
            </a>
          </h3> */}
          <a
            href="https://movie-reviewer-rb.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="landscape"
          >
            <img src="images/movie.png" alt="" />
          </a>
          {/* <p>
            Application built solely on rails with full CRUD capabilities -
            Reviews are a many to many relationship between users and pre-seeded
            movie data
            <span className="utilized">
              <b>Utilized:</b> Ruby on Rails, Embedded Ruby, PostgreSQL, Git,
              Heroku
            </span>
          </p> */}
        </div>
      </div>
    </section>
  );
}
