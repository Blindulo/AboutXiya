import * as React from "react";
import Layout from "../components/layout.js";
import { RESUMECONTENT } from "../texts/resume.js";

function Title(props) {
  return (
    <div>
      <div>{props.name}</div>
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
    <div>
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
        <div>
          {education.university} - {education.address}
        </div>
        <div>
          {education.degree} - {education.major}
        </div>
        <div>
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
      <div>Programming Languages : {props.skill.programmingLanguages}</div>
      <div>Application Development: {props.skill.applicationDevelopment}</div>
      <div>Database Tools: {props.skill.databaseTools}</div>
      <div>GitHub: {props.skill.links.gitHub}</div>
      <div>LinkedIn: {props.skill.links.linkedIn}</div>
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
      dutyList.push(<ol>{duty}</ol>);
    });
    experienceList.push(
      <ol>
        <div>{experience.company}</div>
        <div>{experience.title}</div>
        <div>{experience.organization}</div>
        <div>
          {experience.time.start} - {experience.time.end}
        </div>
        <div>{dutyList}</div>
        <div>{experience.technology}</div>
        <div>{experience.url}</div>
        <div>
          {experience.test.account} - {experience.test.password}
        </div>
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
      dutyList.push(<ol>{duty}</ol>);
    });
    projectList.push(
      <ol>
        <div>{project.projectName}</div>
        <div>{project.detail}</div>
        <div>{dutyList}</div>
      </ol>
    );
    if (project.technology) {
      projectList.push(
        <ol>
          <div>{project.technology}</div>
        </ol>
      );
    }
    if (project.url) {
      projectList.push(
        <ol>
          <div>{project.url}</div>
        </ol>
      );
    }
  });
  return <div>{projectList}</div>;
}

const Resume = () => {
  return (
    <Layout>
      <div>
        <Title
          name={RESUMECONTENT.myName}
          address={RESUMECONTENT.address}
          contact={RESUMECONTENT.contact}
        />
      </div>
      <div>
        <Education educations={RESUMECONTENT.education} />
      </div>
      <div>
        <Skill skill={RESUMECONTENT.skill} />
      </div>
      <div>
        <Experience experiences={RESUMECONTENT.experience} />
      </div>
      <div>
        <Project projects={RESUMECONTENT.project} />
      </div>
    </Layout>
  );
};

export default Resume;
