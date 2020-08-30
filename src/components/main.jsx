import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import Contact from "./contact";
import Project from "./project";
import Resume from "./resume";

const Main = () => (
  <Switch>
    <Route exact path={process.env.PUBLIC_URL+"/"} component={LandingPage} />
    <Route path={process.env.PUBLIC_URL+"/contact"} component={Contact} />
    <Route path={process.env.PUBLIC_URL+"/project"} component={Project} />
    <Route path={process.env.PUBLIC_URL+"/resume"} component={Resume} />
  </Switch>
);

export default Main;
