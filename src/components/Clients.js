import React from "react";
export default function Clients() {
  return (
    <section>
      <header>
        <h2>Clients</h2>
      </header>
      <div className="content">
        <div className="gallery">
          <p className="landscape">
            <img src="images/clients/vegfit_logo.png" alt="" />
          </p>

          <p className="landscape">
            <img src="/images/clients/eaglecanyon.png" alt="" />
          </p>

          <p className="landscape">
            <img src="images/clients/sorrento.png" alt="" />
          </p>
        </div>
      </div>
    </section>
  );
}
