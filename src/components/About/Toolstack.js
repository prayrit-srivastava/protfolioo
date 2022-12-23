import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiArchlinux,
  SiMarkdown,
  SiInkscape,
  SiLeetcode,
  SiGeeksforgeeks,
  SiCodingninjas,
  SiCodechef
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://leetcode.com/sriprayrit/" target="Blank"><SiLeetcode /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://auth.geeksforgeeks.org/user/sriprayrit" target="Blank"><SiGeeksforgeeks /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.codingninjas.com/codestudio/profile/PRAYRIT" target="blank"><SiCodingninjas /></a>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiReact />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://www.codechef.com/users/prayrit1" target="blank"><SiCodechef/></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <a href="" target="blank"><SiVisualstudiocode/></a>
      </Col>
      <h6 align = "left"> click me I will take you to places :) </h6>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMarkdown />
      </Col> */}
    </Row>
  );
}

export default Toolstack;
