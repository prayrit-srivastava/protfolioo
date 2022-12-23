import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  // SiCplusplus,
  DiTerminal,
  DiLinux,
  DiPython,
  DiJava,
  DiGit,
  DiCss3,
} from "react-icons/di";
import {
  SiFirebase,
  SiHtml5,
  SiDiscord,
  SiCplusplus,
  SiNpm,
  SiYarn,
  SiArduino,
  SiRaspberrypi
} from "react-icons/si";
import {
  GrHostMaintenance
} from "react-icons/gr";

function Techstack() {
  return (
    <>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
        <br/><h6>C++</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <br/><h6>Javascript</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython/>
        <br/><h6>Python</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <br/><h6>React</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <br/><h6>HTML</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
        <br/><h6>Linux</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <br/><h6>Github</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <br/><h6>Java</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDiscord />
        <br/><h6>Discord</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <br/><h6>CSS</h6>
      </Col>
    </Row>
    
    </>
  );
}

export default Techstack;
