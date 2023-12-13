// Home.js
import React, { useState, useEffect } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

const dynamicNames = [
  " MSc Software Systems",
  " The Tech Enthusiast",
  " The Problem Solver",
  " The Full Stack Developer",
  " The Open Source Contributor",
  " The Team Player",
  " The Coding Enthusiast",
];



function Home() {
  const [dynamicNameIndex, setDynamicNameIndex] = useState(0);

  useEffect(() => {
    const updateDynamicName = () => {
      setDynamicNameIndex((prevIndex) => (prevIndex + 1) % dynamicNames.length);
      setTimeout(updateDynamicName, 3000);
    };

    // Start the dynamic name update
    updateDynamicName();

    // Clear intervals and show home content after the opening animation completes
    setTimeout(() => {
      const homeElement = document.querySelector('.home');
      if (homeElement) {
        homeElement.style.display = 'block';
        homeElement.classList.add('fadeIn'); // Add a fadeIn class for the animation
      }
    }, 1000); // Adjust the time based on your opening animation duration

    return () => {
      // No need to clear the interval, as we are using setTimeout
    };
  }, []);


  return (
    <div className="home" >

      <div className="about">
        <h2>
          <span style={{ color: "#ffffff" }}>Bubalan </span>
          <span className="dynamic-name" style={{ color: "#ff0000" }}>
            {dynamicNames[dynamicNameIndex]}
          </span>
        </h2>
        <div className="prompt">
          <p>A Full Stack developer with a passion for learning.</p>
          <a href="https://www.linkedin.com/in/bubalans/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a href="mailto:bubalan28@gmail.com" target="_blank" rel="noopener noreferrer">
            <EmailIcon />
          </a>
          <a href="https://github.com/Bubalan0203" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
        </div>
      </div>

      <div className="skills">
        <h1>AREA OF INTEREST</h1>
        <h3>➤ Full Stack Development&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➤ Database Management System</h3>
        <h3>➤ Data Structures and Algorithms&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➤ Object-Oriented Programming</h3>

        <h1>TECHNICAL SKILLS</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Angular&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CSS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BootStrap&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StyledComponents&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Django</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MySQL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SqLite&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Oracle</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Java&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Python&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C++&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TypeScript</span>
          </li>
          <li className="item">
            <h2>Soft-Skills</h2>
            <span>Team Worker&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Innovative Thinking</span>
          </li>
          <li className="item">
            <h2>Certifications</h2>
            <span>
              <ul>
                <li>Great Learning - Angular7</li><br></br>
                <li>Coursera - Developing Front-End Apps with React</li><br></br>
                <li>Hackerrank - C++</li><br></br>
                <li>NPTEL - Programming in Java</li>
              </ul>
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
