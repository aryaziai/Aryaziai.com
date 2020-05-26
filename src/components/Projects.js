import React from "react";
export default function Projects() {
  var moviefrontend = (
    <a
      href="https://github.com/aryaziai/Movie-Reviewer/tree/master/app/views"
      target="_blank"
    >
      Front-End
    </a>
  );
  var moviebackend = (
    <a href="https://github.com/aryaziai/Movie-Reviewer" target="_blank">
      Back-End
    </a>
  );
  var fetchfrontend = (
    <a href="https://github.com/aryaziai/Fetch" target="_blank">
      Front-End
    </a>
  );
  var fetchbackend = (
    <a href="https://github.com/aryaziai/Fetch-Backend" target="_blank">
      Back-End
    </a>
  );
  var jspaintfrontend = (
    <a href="https://github.com/aryaziai/JS-Paint" target="_blank">
      Front-End
    </a>
  );
  var jspaintbackend = (
    <a href="https://github.com/aryaziai/JS-Paint-Server" target="_blank">
      Back-End
    </a>
  );

  return (
    <section>
      <header>
        <h2>Projects</h2>
      </header>
      <div className="content" id="mobilesourcesection"></div>
      <section className="initialsource" id="sourcesection">
        <header id="sourceheader">
          <h3>Source &#x003C;&#62;</h3>
          <h5>{fetchfrontend}</h5>
          <h5>{fetchbackend}</h5>
        </header>

        <div className="content">
          <h3>
            <a
              href="https://fetchnow.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fetch Now
            </a>
          </h3>
          <a
            href="https://fetchnow.org"
            target="_blank"
            rel="noopener noreferrer"
            className="landscape"
          >
            <img src="images/projects/fetch.png" alt="" />
          </a>

          <p>
            Fetch news via Google API in topics users specify with customized
            parameters - Users can remove articles from feed, which deletes
            article from db and state in React - Share articles via iMessage and
            Email, auto-populates content with respective article
            <span className="utilized">
              <b>Utilized:</b> React, Google API, JSON Web Tokens, localStorage,
              Rails API
            </span>
          </p>
          <div id="mobilesource">
            <h3>Source &#x003C;&#62;</h3>
            <h5>{fetchfrontend}</h5>
            <h5>{fetchbackend}</h5>
          </div>
        </div>
      </section>

      <section id="sourcesection">
        <header id="sourceheader">
          <h3>Source &#x003C;&#62;</h3>
          <h5>{jspaintfrontend}</h5>
          <h5>{jspaintbackend}</h5>
        </header>

        <div className="content">
          <h3>
            <a
              href="https://aryaziai.github.io/JS-Paint/"
              target="_blank"
              rel="noopener noreferrer"
            >
              JSPAINT
            </a>
          </h3>
          <a
            href="https://aryaziai.github.io/JS-Paint/"
            target="_blank"
            rel="noopener noreferrer"
            className="landscape"
          >
            <img src="images/projects/jspaint.png" alt="" />
          </a>

          <p>
            Developed with vanilla JavaScript front-end and Rails API backend -
            Users can add/remove drawings from their profile
            <span className="utilized">
              <b>Utilized:</b> HTML Canvas, eventListeners, CSS, Rails API, Git,
              Heroku
            </span>
          </p>
          <div id="mobilesource">
            <h3>Source &#x003C;&#62;</h3>
            <h5>
              <h5>{jspaintfrontend}</h5>
            </h5>
            <h5>{jspaintbackend}</h5>
          </div>
        </div>
        {/* end js paint */}
        <section id="sourcesection_third">
          <header id="sourceheader">
            <h3>Source &#x003C;&#62;</h3>
            <h5>{moviefrontend}</h5>
            <h5>{moviebackend}</h5>
          </header>

          <div className="content">
            <h3>
              <a
                href="https://movie-reviewer-rb.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Movie Reviewer
              </a>
            </h3>
            <a
              href="https://movie-reviewer-rb.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="landscape"
            >
              <img src="images/projects/movie_reviewer.png" alt="" />
            </a>

            <p>
              Application built solely on rails with full CRUD capabilities -
              Reviews are a many to many relationship between users and
              pre-seeded movie data
              <span className="utilized">
                <b>Utilized:</b> Ruby on Rails, Embedded Ruby, PostgreSQL, Git,
                Heroku
              </span>
            </p>
            <div id="mobilesource">
              <h3>Source &#x003C;&#62;</h3>
              <h5>
                <h5>{jspaintfrontend}</h5>
              </h5>
              <h5>{jspaintbackend}</h5>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
