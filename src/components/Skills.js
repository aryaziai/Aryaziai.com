import React from "react";
export default function Skills() {
  return (
    <section>
      <header>
        <h2>Skills</h2>
        <p>
          Javascript
          <br />
          ReactJS <br />
          Redux <br />
          React Native <br />
          Ruby on Rails <br />
          REST API <br />
          Wordpress <br />
          HTML5/CSS3 <br />
          SQL <br />
          Git
        </p>
      </header>
      <div className="content">
        <p>
          <strong>Passion for</strong> buidling responsive and lightweight
          sites. Responsible for designing and building compelling UIs for
          business applications and customer facing websites.
        </p>
        <ul className="feature-icons">
          <li className="icon solid fa-laptop">Responsive Design</li>
          <li className="icon solid fa-bolt">Fast Load Times</li>
          <li className="icon solid fa-code">Clean Code</li>
          <li className="icon solid fa-lightbulb">Intuitive Experience</li>
          <li className="icon solid fa-users">Collaborative</li>
          <li className="icon solid fa-th">Pixel-Perfect</li>
        </ul>
        {/* <p>
          Vehicula ultrices sed ultricies condimentum. Magna sed etiam
          consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et
          dolor libero, feugiat magna tempus, sed et lorem adipiscing.
        </p> */}
      </div>
    </section>
  );
}
