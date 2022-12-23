import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import me from "../../Assets/me.jpeg";
import { FaLinkedinIn,FaInstagram, FaEnvelope ,FaTwitter } from "react-icons/fa";
import {
    AiFillGithub,AiOutlineWhatsApp
  } from "react-icons/ai";
function Myself() {
    return (
        <>
        <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1>Hello</h1>
              <ul>
              <li style={{fontSize:24}}>I am a CS, Undergrad'23 at KIET Group Of Institution.</li>
              <li style={{fontSize:24}}>Did my schooling from Sunbeam School ,Lahartara,Varanasi.</li>
              <li style={{fontSize:24}}>I am a frontend developer </li>
              <li style={{fontSize:24}}>I use React from building most of my project </li>
              <li style={{fontSize:24}}>I love working with javascript and php and have also worked on wordpress</li>
              <li style={{fontSize:24}}>I Have also done Illustration using Adobe Illustrator.</li>
              </ul>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img 
                src={me}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "650px" ,width:300}}
              />
              
            </Col>
            
          </Row>
          
        </Container>
        
      </Container>
      <h2>Connect with me</h2>
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
      <li className="social-icons">
        <a
          href="https://github.com/prayrit-srivastava"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <AiFillGithub />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://wa.me/7394058033"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <AiOutlineWhatsApp />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://twitter.com/prayrit7"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <FaTwitter/>
        </a>
      </li>
    </ul>
    </>
        );
}
export default Myself;  