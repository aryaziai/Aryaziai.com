import React from "react";
export default function Projects() {
  return (
    <>
      <section>
        <header>
          <h3>Nisl consequat</h3>
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam sed facilisis ante interdum congue. Integer mollis, nisl
            amet convallis, porttitor magna ullamcorper, amet mauris. Ut magna
            finibus nisi nec lacinia ipsum maximus.
          </p>
        </header>
        <div className="content">
          <div className="gallery">
            <a href="images/gallery/fulls/05.jpg" className="landscape">
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
      <section>
        <header>
          <h3>Lorem gravida</h3>
          <p>
            Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat
            tempus aenean ornare velit lacus, ac varius sed enim lorem
            ullamcorper dolore. ac varius enim lorem ullamcorper dolore. Proin
            aliquam facilisis.
          </p>
        </header>
        <div className="content">
          <div className="gallery">
            <a href="images/gallery/fulls/08.jpg" className="portrait">
              <img src="images/gallery/thumbs/08.jpg" alt="" />
            </a>
            <a href="images/gallery/fulls/09.jpg" className="portrait">
              <img src="images/gallery/thumbs/09.jpg" alt="" />
            </a>
            <a href="images/gallery/fulls/10.jpg" className="landscape">
              <img src="images/gallery/thumbs/10.jpg" alt="" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
