import React, { Component } from "react";
import { Tabs,Tab,Grid,Cell,Card,CardTitle,CardText,CardActions,Button,CardMenu,IconButton} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "210px",
                background:
                  "url(https://res.cloudinary.com/shawabhishek/image/upload/v1598685543/1w_mjm1ol.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>
              This is a simple weather app that fetches data from a weather API
              and user can put the location on search bar and it will fetches
              weather of that location with other detail also like humidity and
              chance of rain
            </CardText>
            <CardActions border className="button-bootstrap">
              <a
                href="https://github.com/shawabhishek/weather-website"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Github</Button>
              </a>
              <a
                href="https://shaw-weather-website.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "452", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "245px",
                background:
                  "url(https://res.cloudinary.com/shawabhishek/image/upload/v1598686210/task_ux1yrt.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>
              This is a task manager RestAPI where user can login and create task as this a RestApi 
              anybody can use this API in his project. Working in Postman.
            </CardText>
            <CardActions border className="button-bootstrap">
              <a
                href="https://github.com/shawabhishek/task-manager-api"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Github</Button>
              </a>
              <a
                href="http://shawabhi-task-manager.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "247px",
                width: "350px",
                background:
                  "url(https://user-images.githubusercontent.com/32011625/83231416-16115100-a1a9-11ea-90de-227061b70ee4.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>
              This is a Phone book RestAPI where user can read, write , delete and 
              update its phone book record working in Insomnia.
            </CardText>
            <CardActions border className="button-bootstrap">
              <a
                href="https://github.com/shawabhishek/phone-book-API"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Github</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "250px",
              background:
                "url(https://res.cloudinary.com/shawabhishek/image/upload/v1598706486/st_rx7aam.jpg) center / cover",
            }}
          ></CardTitle>
          <CardText>
            Its a webpage made using ReactJs where user can select different
            type of phone and search for it in the bar.
          </CardText>
          <CardActions border className="button-bootstrap">
            <a
              href="https://github.com/shawabhishek/mobile-store"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button colored>Github</Button>
            </a>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "245px",
              background:
                "url(https://res.cloudinary.com/shawabhishek/image/upload/v1598707033/had_rggwfn.jpg) center / cover",
            }}
          ></CardTitle>
          <CardText>
            This project is made using hadoop ecosystem which is a part Big Data 
            in this data of different flights are there and this program can easily do analysis 
            on the data and can give disered ouput. 
          </CardText>
          <CardActions border className="button-bootstrap">
            <a
              href="https://github.com/shawabhishek/Big_data_project"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button colored>Github</Button>
            </a>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      );
    }
  }

  render() {
    return (
      <div className="projects-main">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>NodeJs/RestAPI</Tab>
          <Tab>React</Tab>
          <Tab>Hadoop</Tab>
        </Tabs>

        <Grid className="projects-grid">
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
