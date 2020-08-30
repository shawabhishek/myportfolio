import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="img-row">
            <div className="img-column">
            <img
              src="https://res.cloudinary.com/shawabhishek/image/upload/v1598726984/my_frnzzi.jpg"
              alt="avatar"
              className="avatar-img"
            />
            </div>
            <div className="img-column">
            <img
              src="https://res-console.cloudinary.com/shawabhishek/thumbnails/transform/v1/image/upload//v1598770617/ZXpnaWYuY29tLXdlYnAtdG8tanBnLXJlbW92ZWJnLXByZXZpZXdfY2Z0bG03/drilldown"
              alt="qouat"
              className="quote-img"
            />
            </div>
            </div>
            <div className="banner-text">
              <center>
                <h1 className="h1-landing">ABHISHEK SHAW</h1>
              </center>
              <hr />
              <center>
                <p>
                  HTML/CSS | JavaScript | NodeJS | React | C++ | MongoDB{" "}
                </p>
              </center>

              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/abhishek-shaw-8a093514a/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="https://github.com/shawabhishek"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/__.shaw.__/?hl=en"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
