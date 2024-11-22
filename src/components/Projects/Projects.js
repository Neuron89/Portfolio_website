import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blog from "../../Assets/Projects/blog.jpg";
import restore from "../../Assets/Projects/restore.png";
import weatherapp from "../../Assets/Projects/weatherapp.webp";
import lilly58 from "../../Assets/Projects/lilly58.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              isBlog={false}
              title="Weather module"
              description="Building an IP address based weather terminal display to be added into Fastfetch. Using this as a educational experiment to focus on API usage, terminal enviromental variables, and adding to an opensource project."
              ghLink="https://github.com/Neuron89/weather_app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lilly58}
              isBlog={false}
              title="Custom split keyboard"
              description="Focusing on better typing habbits and a being tired with the old keyboards of my fathers generation, i set out to make something that worked for what I wanted. I ended up building my own splitkeyboard and im slowly looking into doing my own pcb design"
              ghLink="https://github.com/Neuron89/lily58-wireless-view-zmk-config"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restore}
              isBlog={false}
              title="Backup and Restore"
              description="I have always been a fan of making things simple. this project is a 'work in progress'. The plan will be to create multiple small modules that can be used together to take a full backup of your local computer, store it where you want, and then allow you to restore with a single script. The hope will be to expand this into something that can be done from a bootloader and also used for anisble to build any new servers i set up in my home-lab"
              ghLink="https://github.com/Neuron89/Restore_project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="website from scratch"
              description="I have no interest in being a web developer but I have a firm princible in my life that I cant TRUELY appreciate anything unless I have tried to do it myself. This mindset has given me a much greater appreciation for someones talents. Because of this ideal, I challanged myself to create my own website from scratch and atempt to give it multiple functions like a Blog server and a Filesharing section with Oauth intergration."
              ghLink="https://github.com/Neuron89/website"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
