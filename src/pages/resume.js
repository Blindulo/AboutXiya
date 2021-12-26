import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Layout from "../components/layout.js";
import { RESUMECONTENT } from "../texts/resume.js";
import BlockBackText from "../components/blockBackText.js";
import {
  blockBack,
  nameStyle,
  contactStyle,
  content,
  title,
  resumeContainer,
  avatar,
} from "../css/resume.module.css";

function Title(props) {
  return (
    <div>
      <div className={nameStyle}>{props.name}</div>
      {/* <Address address={props.address} /> */}
      <Contact contact={props.contact} />
    </div>
  );
}

function Address(props) {
  return (
    <div>
      <div>{props.address.street}</div>
      <div>
        {props.address.city}, {props.address.state} {props.address.zipcode}
      </div>
    </div>
  );
}

function Contact(props) {
  return (
    <div className={contactStyle}>
      <div>{props.contact.phone}</div>
      <div>{props.contact.email}</div>
    </div>
  );
}

function Education(props) {
  const educations = props.educations;

  const educationList = [];

  educations.forEach((education) => {
    educationList.push(
      <ol>
        <div className={title}>
          {education.university} - {education.address}
        </div>
        <div className={content}>
          {education.degree} - {education.major}
        </div>
        <div className={content}>
          {education.time.start} - {education.time.end}
        </div>
      </ol>
    );
  });
  return <div>{educationList}</div>;
}

function Skill(props) {
  return (
    <div>
      <div className={title}>Programming Languages:</div>
      <div className={content}>{props.skill.programmingLanguages}</div>
      <br />
      <div className={title}>Application Development:</div>
      <div className={content}>{props.skill.applicationDevelopment}</div>
      <br />
      <div className={title}>Database Tools:</div>
      <div className={content}>{props.skill.databaseTools}</div>
      <br />
      <div className={title}>GitHub:</div>
      <Link className={content} to={props.skill.links.gitHub}>
        {props.skill.links.gitHub}
      </Link>
      <div className={title}>LinkedIn:</div>
      <Link className={content} to={props.skill.links.linkedIn}>
        {props.skill.links.linkedIn}
      </Link>
    </div>
  );
}

function Experience(props) {
  const experiences = props.experiences;

  const experienceList = [];

  experiences.forEach((experience) => {
    const duties = experience.duty;
    const dutyList = [];
    duties.forEach((duty) => {
      dutyList.push(<li>{duty}</li>);
    });
    experienceList.push(
      <ol>
        <div className={title}>{experience.company}</div>
        <div className={content}>{experience.title}</div>
        <div className={content}>{experience.organization}</div>
        <div className={content}>
          {experience.time.start} - {experience.time.end}
        </div>
        <ul className={content}>{dutyList}</ul>
        <div className={content}>Technology: {experience.technology}</div>
        <Link className={content} to={experience.url}>
          URL: {experience.url}
        </Link>
        {/* <div className={content}>
          Test Account:&nbsp;&nbsp;
          {experience.test.account} - {experience.test.password}
        </div> */}
      </ol>
    );
  });
  return <div>{experienceList}</div>;
}

function Project(props) {
  const projects = props.projects;

  const projectList = [];

  projects.forEach((project) => {
    const duties = project.duty;
    const dutyList = [];
    duties.forEach((duty) => {
      dutyList.push(<li>{duty}</li>);
    });
    if (project.url) {
      projectList.push(
        <ul>
          <Link className={title} to={project.url}>
            {project.projectName}
          </Link>
          {/* <div>{project.detail}</div> */}
          <div className={content}>{dutyList}</div>
        </ul>
      );
    } else {
      projectList.push(
        <ul>
          <div className={title}>{project.projectName}</div>
          {/* <div>{project.detail}</div> */}
          <div className={content}>{dutyList}</div>
        </ul>
      );
    }

    // if (project.technology) {
    //   projectList.push(<div className={content}>{project.technology}</div>);
    // }
  });
  return <div>{projectList}</div>;
}

function Block({ name, children }) {
  const [isDisplay, setDisplay] = useState({ display: "none" });

  return (
    <div
      className={blockBack}
      onMouseEnter={(e) => {
        setDisplay({ display: "block" });
      }}
      onMouseLeave={(e) => {
        setDisplay({ display: "none" });
      }}
    >
      {children}
      <BlockBackText style={isDisplay} name={name} />
    </div>
  );
}

const Resume = () => {
  return (
    <Layout className={resumeContainer}>
      <div>
        <Title
          name={RESUMECONTENT.myName}
          address={RESUMECONTENT.address}
          contact={RESUMECONTENT.contact}
        />
      </div>
      <br />
      <Block name="Education">
        <Education educations={RESUMECONTENT.education} />
      </Block>
      <br />
      <Block name="Skills">
        <Skill skill={RESUMECONTENT.skill} />
      </Block>
      <br />
      <Block name="Experience">
        <Experience experiences={RESUMECONTENT.experience} />
      </Block>
      <br />
      <Block name="Projects">
        <Project projects={RESUMECONTENT.project} />
      </Block>
      <div className={avatar}>
        <StaticImage src="../images/avatar.JPG" alt="avatar" />
      </div>
    </Layout>
  );
};

export default Resume;
