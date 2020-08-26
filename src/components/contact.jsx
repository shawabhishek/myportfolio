import React, { Component } from "react";
import { Grid, Cell,ListItem,List, ListItemContent } from "react-mdl";

class Contacts extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Ankita Upadhyay</h2>
            <img
              src=""
              alt="avatar"
              style={{ height: "250px" }}
            />
            <hr></hr>
            <p
              className="contacts-paragraph"
              style={{ overflow: "auto", height: "inherit", flex: 1 }}
            >
              My name is Ankita Upadhyay and I am currently a senior at the
              University of California, Santa Cruz (UCSC) pursuing a Bachelor's
              in Computer Science. I am interested in pursuing software
              engineering related roles and have experience in web development,
              namely front-end. I also have experience in technical writing,
              database management, and product management. I am currently
              looking for a full time job so feel free to check out my projects
              and experience on Github and LinkedIn and contact me for job
              opportunities!
            </p>
          </Cell>

          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr className="hr-2" />

            <div className="contacts-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Raleway" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    408-718-7124
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Raleway" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    aaupadhy@ucsc.edu
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Raleway" }}
                  >
                    <i className="fa fa-github-square" aria-hidden="true" />
                    <a
                      href="https://github.com/Ankita-Upadhyay"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      My Github
                    </a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Raleway" }}
                  >
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                    <a
                      href="https://www.linkedin.com/in/ankita-upadhyay-35a929104/>"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      My LinkedIn
                    </a>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contacts;
