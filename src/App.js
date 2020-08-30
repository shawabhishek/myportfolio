import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
<div >
        <Layout
          style={{
            background:
              "url(https://res.cloudinary.com/shawabhishek/image/upload/v1598766862/wal_x1u9px.jpg) center / cover",
          }}
        >
          <Header transparent title={<Link style={{ color: "white" ,fontSize:"20px"}} to="/">Abhishek's Portfolio</Link>}>
            <Navigation className="nav-main">
              <Link style={{fontSize:"16px"}} to="/">Home</Link>
              <Link style={{fontSize:"16px"}} to="/resume">Resume</Link>
              <Link style={{fontSize:"16px"}} to="/project">Projects</Link>
              <Link style={{fontSize:"16px"}} to="/contact">About</Link>
            </Navigation>
          </Header>
          <Drawer title={<Link style={{ color: "black" ,fontSize:"20px"}} to="/">Abhishek's Portfolio</Link>}>
            <Navigation className="nav-main" style={{color:"black",fontSize:"150%"}}>
              <Link style={{fontSize:"16px"}} to="/">Home</Link>
              <Link style={{fontSize:"16px"}} to="/resume">Resume</Link>
              <Link style={{fontSize:"16px"}} to="/project">Projects</Link>
              <Link style={{fontSize:"16px"}} to="/contact">About</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
