import React, { Component } from "react";


class Contacts extends Component {
  render() {
    return (
      <div className="contacts-body">
        <link href="https://fonts.googleapis.com/css2?family=BioRhyme:wght@700&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <h1 style={{fontSize:"70px"}}>Hi, I'm Abhishek. I design & build.</h1>
        <h1 style={{}}>yes, I'm a Web Developer</h1>
        <i class="fa fa-quote-left fa-3x fa-pull-left" aria-hidden="true"></i>
        <h2>about me</h2>
        <p>I love programming, writing , traveling and playing football.<br></br>
          I'm enthusiast learner love to learn new tech stack and <b style={{fontSize:"20px"}}>&lt;code&gt;</b><br></br>
          Currently in B.tech 4 year.
          Feel free to check me out on.....  
        </p>
        <div className="contacts-list">
         
        <a href="#" class="fa fa-facebook"></a>
        <a href="https://www.linkedin.com/in/abhishek-shaw-8a093514a/" class="fa fa-linkedin"></a>
        <a href="https://www.instagram.com/__.shaw.__/?hl=en" class="fa fa-instagram"></a>
        <a href="https://join.skype.com/invite/WYLWDi9YGJEI" class="fa fa-skype"></a>
        <a href="https://github.com/shawabhishek" class="fa fa-github"></a>
        </div>
      </div>
    );
  }
}

export default Contacts;
