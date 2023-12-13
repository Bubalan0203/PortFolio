import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/bubalan03._/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
        <a href="https://github.com/Bubalan0203" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
          <a href="mailto:bubalan28@gmail.com" target="_blank" rel="noopener noreferrer">
            <EmailIcon />
          </a>
        <a href="https://www.linkedin.com/in/bubalans/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; Bubalan Msc SS </p>
    </div>
  );
}

export default Footer;
