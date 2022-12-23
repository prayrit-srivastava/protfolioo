import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Salus from "../../Assets/Projects/Salus.png";
import TheGeekly from "../../Assets/Projects/images.jpeg";
import CarboTrack from "../../Assets/Projects/CarboTrack.png";
import Sched from "../../Assets/Projects/Sched.png";
import Aprendiz from "../../Assets/Projects/ima.jpeg";

function Projects() {
  return (
    
    <Container fluid className="project-section">
    
       <Particle />
       <Container>
        {/* <h1>hello</h1> */}
         <h1 className="project-heading">
           My Recent <strong className="teal">Projects & Certifications</strong>
         </h1>
         <p style={{ color: "white" }}>
           Here are a few things I've worked on recently.
         </p>
         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}> 
           <Col md={4} className="project-card">
             <ProjectCard
              imgPath={CarboTrack} 
               isBlog={false}
              title="SplitEasy"
              description="This webapplication allow user to input the money which he want to
              divide among the group based on the percentage of their share with
              the security of BlockChain."
              ghLink="https://github.com/Dhruvsr/CarboTrack"
              demoLink="https://dhruv.is-from.space/CarboTrack_Demo.MP4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sched}
              isBlog={false}
              title="Automatic Time Generator"
              description="This automated generator is designed to allow user to input the desired subject and time duration and user is then provided with suitable time table as per requirement."
              ghLink="https://github.com/Dhruvsr/Sched"
              demoLink="https://dhruv.is-from.space/1659861963.png"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Aprendiz}
              isBlog={false}
              title="The NGO"
              description="This solo project of mine was focused on the problem and  various formality need to attain to as a new member for a person  going through registration in any NGO.
              "
              ghLink="https://github.com/Dhruvsr/Aprendiz"
              demoLink="https://dhruv.is-from.space/2021-10-10-20-08-04.mov"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Salus}
              isComp={true}
              title="Project Salus"
              description="I participated in a climate change-themed science fest organized by Christ Junior College called Project Salus. It involved a series of climate change-themed science challenges which had to be solved using Python within ten minutes. It also involved the creation of a presentation. I won first place for the theme 'Technica Humanitus'. "
              ghLink="https://dhruv.is-from.space/1659865480.png"
              demoLink="https://dhruv.is-from.space/1659865480.png"
            />
          </Col> */}

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TheGeekly}
              isBlog={false}
              title="Jarvis"
              description="This project is designed with the help of pyttsx3 , SpeechRecognition
              and wikipedia module to a generate a functional small version of Jarvis "
              ghLink="https://github.com/prayrit-srivastava/jarvis"
              demoLink="https://thegeekly.net" 
            />
          </Col> 

        </Row>
      </Container> 
    </Container>
  );
}

export default Projects;
