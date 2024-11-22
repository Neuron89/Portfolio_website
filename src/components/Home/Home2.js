import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A LITTLE BIT ABOUT <span className="purple"> ME </span>
            </h1>
            <p className="home-about-body">
              solving problems has always brought me the most joy in life.
              <br />
              <br />
              the thrill of fixng something or building something from scratch
              is what gets me out of bed in the morning (and makes me stay up
              late at night)‍
              <br />
              <br />
              Most of my foundational knowledge comes from harware and basic
              electrical engenerring which lead me into a desire to do more with
              it.
              <br />
              <br />I have become very profecient in:
              <i>
                <b className="purple"> Python, Bash, and Yaml. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building and maintaining new &nbsp;
              <i>
                <b className="purple">Servers and large scale networks </b>
                which lead into a need to become profiecnt at{" "}
                <b className="purple">Coding.</b>
              </i>
              <br />
              <br />I have also had a desire to make things work for me, not the
              other way around. this has lead to me building my own{" "}
              <b className="purple">Devices</b> using
              <i>
                <b className="purple"> Microcontrollers </b>
                and
                <b className="purple"> single board computers</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> ESP32s, Arduinos,</b>
                and
                <b className="purple"> Raspberrypis</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p></p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/neuron89"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hayden-nester/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
