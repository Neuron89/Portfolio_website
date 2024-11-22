import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, my name is <span className="purple">Hayden Nester</span>
            <br />
            I am currently employed as a Sr. Territory sales manager, but
            <br />
            I have spent my life building playing with and learning about computers in my free time.
            <br />
            I have decided its time to turn my passion into my carrer.
            <br />
            If you love what you do, it will never feel like work. Thats something i strive for.
            <br />
            <br />
            When im not working, some other activites i enjoy doing:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Being a Father
            </li>
            <li className="about-activity">
              <ImPointRight /> building small circut projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Woodworking
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Building my smarthome
            </li>

          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I have never let my schooling interfere with my education."{" "}
          </p>
          <footer className="blockquote-footer"> Mark Twain </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
