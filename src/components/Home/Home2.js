import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn,FaInstagram, FaEnvelope } from "react-icons/fa";

function Home2() {
  return (
    <>
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            
            <h1></h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/___itzzprayrit/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/prayrit-srivastava-b520111a3/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:sriprayrit@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
    </>
  );
}
export default Home2;
