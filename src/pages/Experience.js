import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience" style={{ background: "#000000", color: "#ffffff" }}>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2019"
          iconStyle={{ background: "linear-gradient(45deg, #000000, #ff0000)", color: "#ffffff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title" style={{ color: "#ff0000" }}>
            St.Joseph's Matriculation Higher Secondary School, Coimbatore
          </h3>
          <p style={{ color: "#000000" }}>Secondary Schooling</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2021"
          iconStyle={{ background: "linear-gradient(45deg, #000000, #ff0000)", color: "#ffffff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title" style={{ color: "#ff0000" }}>
            St.Joseph's Matriculation Higher Secondary School, Coimbatore
          </h3>
          <p style={{ color: "#000000" }}>Higher Secondary Schooling</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2026"
          iconStyle={{ background: "linear-gradient(45deg, #000000, #ff0000)", color: "#ffffff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title" style={{ color: "#ff0000" }}>
            Coimbatore Institute of Technology
          </h3>
          <h2 style={{ color: "#000000" }}>MSc Software Systems</h2>
          <p style={{ color: "#000000" }}>5-Year Integrated</p>
          <p style={{ color: "#000000" }}>Currently in 3rd Year, 5th semester</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="present"
          iconStyle={{ background: "linear-gradient(45deg, #000000, #ff0000)", color: "#ffffff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title" style={{ color: "#ff0000" }}>
            Searching For 6 Months Intern
          </h3>
          <br></br>
          <h4 className="vertical-timeline-element-subtitle" style={{ color: "#000000" }}>
            Role: Full Stack Developer
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
