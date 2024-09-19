import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/team-work.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px 0", alignItems: "center" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", textAlign: "left" }}>
              Qui <strong className="purple">Suis-je</strong>
            </h1>
            <Aboutcard />
          </Col>

          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        {/*<h1 className="project-heading">*/}
        {/*  Professional <strong className="purple">Skillset </strong>*/}
        {/*</h1>*/}

        <h1 className="project-heading">
          {/*Professional <strong className="purple">Skillset </strong>*/}
          <strong className="purple">Langages</strong> et <strong className="purple">Technologies</strong> que j'utilise
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Outils</strong> que j'utilise
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;