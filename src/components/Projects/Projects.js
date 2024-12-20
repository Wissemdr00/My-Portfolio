import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Chat App"
              description="A personal chat application built with MERN Stack (MongoDB, Express.js, React, Node.js) and Socket.io.
Features include real-time messaging, user authentication with JWT, chat rooms, and a responsive interface for a seamless user experience."
              ghLink="https://github.com/Wissemdr00/chat-app-using-nodejs-and-react-socket.io"
              demoLink="https://chatappwissemdev-woad.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Color mix game"
              description="I built a unique and engaging web application called Color Mix Game, where users can create their own pixel art masterpieces by coloring individual pixels on a grid. The game allows users to express their creativity and bring their imagination to life. Upon completion, users can download their artwork as a digital image.. Built using Angular, Spring Boot, and Postgres SQL, with secure login and authentication using JWT."
              ghLink="https://github.com/Wissemdr00/color-mix-game"
              demoLink="https://www.upwork.com/freelancers/~01ddee2fffa17a442b?p=1825123988707475456"
              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
