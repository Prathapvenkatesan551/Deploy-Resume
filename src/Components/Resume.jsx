import React from "react";
import "./Resume.css";
import { useState } from "react";

const Resume = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState('');
  let project1='Implemented a Full stack Project On Ecommerce Web application ';

  const handleMoreDetails = (project) => {
    // Set the popup content based on the project
    if (project === 'MarketPlace') {
      setPopupContent('Implemente');
    } else if (project === 'PasswordManager') {
      setPopupContent('Details about the Password Manager...');
    }
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleLeetcode=()=>{
    window.open('https://leetcode.com/u/PrathapVenkatesan/','_blank');
  }
  const handleGithub=()=>{
    window.open('https://github.com/Prathapvenkatesan551','_blank');
  }
  const handleHackerrank=()=>{
    window.open('https://www.hackerrank.com/profile/Prathap2venkate1','_blank');
  }
  return (
    <div className="resume">
      <h1>Resume</h1>
      <div className="line"></div>
      <br />
      <div className="head1">
        <h1>Education</h1>
        <img src="degree.png" alt="" className="degree" />
      </div>
      <br />

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <div className="box">
              <div className="t-content">
                <div className="content">
                  <div className="year">
                    <img src="calendar.png" alt="" className="calender" />
                    2021-2025 Batch
                  </div>
                  <h3>Bachelor's Degree</h3>
                  <p>
                    Computer Science and Engineering in Erode Sengunthar Engineering college
                    ,CGPA : 8.2

                  </p>
                </div>
              </div>

              <div className="t-content">
                <div className="content">
                  <div className="year">
                    <img src="calendar.png" alt="" className="calender" />
                    2019-2021 Batch
                  </div>
                  <h3>Higher Secondary 12th</h3>
                  <p>
                    Bio Maths in Sri Ramakrishna matric higher secondary school,
                    Percentage : 82.6%
                  </p>
                </div>
              </div>

              <div className="t-content">
                <div className="content">
                  <div className="year">
                    <img src="calendar.png" alt="" className="calender" />
                    2018-2019 Batch
                  </div>
                  <h3>SSLC - 10th</h3>
                  <p>
                  Muthzamil Government Higher Secondary School ,
                  Percentage : 68.4%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="head1">
        <h1>Projects</h1>
        <img src="degree.png" alt="" className="degree" />
      </div>
      <br />

      <div className="projects">
        <div className="projectCard">
          <h2>MarketPlace Application</h2>
          <p>Full Stack Project</p>
          <p>[React js, JavaScript, Spring Boot, MySQL]</p>
          <button onClick={() => handleMoreDetails('MarketPlace')}>More Details</button>
        </div>
        <div className="projectCard">
          <h2>Password Manager</h2>
          <p>Desktop Application</p>
          <p>[Java, Java Swing]</p>
          <button onClick={() => handleMoreDetails('PasswordManager')}>More Details</button>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>&times;</span>
            <h2>MarketPlace Application</h2>
            <p>{popupContent}</p>
            <button>GitHub</button>
          </div>
        </div>
      )}
      <br />
      <div className="head1">
        <h1>Technical Skills</h1>
        {/* <img src="degree.png" alt="" className="degree" /> */}
      </div>
      <br />
      <div className="Tech-skills">
        <div className="skill">
          <img src="java8.png" alt="" className="skillimage" />
          <h2>Java 8</h2>
        </div>
        <div className="skill">
          <img src="springboot.png" alt="" className="skillimage" />
          <h2>Spring Boot</h2>
        </div>
        <div className="skill">
          <img src="react.png" alt="" className="skillimage" />
          <h2>React JS</h2>
        </div>
        <div className="skill">
          <img src="mysql.png" alt="" className="skillimage" />
          <h2>My Sql</h2>
        </div>
        <div className="skill">
          <img src="javascript.png" alt="" className="skillimage" />
          <h2>Java Script</h2>
        </div>
        <div className="skill">
          <img src="dsa.png" alt="" className="skillimage" />
          <h2>Data Structures</h2>
        </div>
      </div>
      <br />
      <div className="head1">
        <h1>Skills Achivements</h1>
        <img src="degree.png" alt="" className="degree" />
      </div>
      <br />
      <div className="skillsAchieved">
        <div className="sa-skills">
            <img src="leetcode.png" alt="" className="sa-skill" />
            <label htmlFor="">Leetcode</label>
            <div className="leet-level">
                <p>Problem Solving</p>
                </div>
            <button onClick={handleLeetcode}>view</button>
        </div>
        <div className="sa-skills">
            <img src="github.png" alt="" className="sa-skill" />
            <label htmlFor="">Git Hub</label>
            <div className="leet-level">
                <p>Projects Contribution</p>
                </div>
            <button onClick={handleGithub}>view</button>
        </div>
            <div className="sa-skills">
                <img src="hackerrank.png" alt="" className="sa-skill" />
                <label htmlFor="">Hackerrank</label>
                <div className="leet-level">
                    <p>Problem Solving</p>
                    </div>
                <button onClick={handleHackerrank}>view</button>
            </div>
      </div>
    </div>
  );
};

export default Resume;
