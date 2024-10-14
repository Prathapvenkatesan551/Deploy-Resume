import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="line"></div>
      <p>
        I'm currently pursuing my BE in Computer Science, specializing in Full
        Stack Development, Enterprise Java, Data structures, web technologies,
        and professional portfolios.
      </p>
      <p>
        With a strong passion for mentoring and a hands-on approach, I guide
        final year students to excel in their projects, providing them with
        practical skills essential for success in the fast-paced tech sector
      </p>

      <h2>Actions I'm Taking</h2>
      <div className="actions">
        <div className="card">
        <img src="ps.png" alt="" className="image"/>
        <div className="caption">
          <h3>Problem Solving</h3>
          <label htmlFor="">Challenging the Problem in coding platforms</label>
        </div>
        </div>
        <div className="card">
        <img src="coding.png" alt="" className="image"/>
        <div className="caption">
          <h3>Web Development</h3>
          <label htmlFor="">Developing the high quality web sites with the professional level</label>
        </div>
        </div>
        
      </div>
      <div className="actions">
      <div className="card">
        <img src="inno.png" alt="" className="image"/>
        <div className="caption">
          <h3>Innovative thing</h3>
          <label htmlFor="">Challenging the Problem in coding platforms</label>
        </div>
        </div>
        <div className="card">
        <img src="fire.png" alt="" className="image"/>
        <div className="caption">
          <h3>Video Game</h3>
          <label htmlFor="">high-speed thrills and compete against other drivers in a variety of races and challenges</label>
        </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default About;
