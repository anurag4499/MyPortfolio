import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import whizzact from "../../Assets/Projects/whizzAct.png";
import fuchicrop from "../../Assets/Projects/fuchicrop.png";
import Boru from "../../Assets/Projects/Boru.png";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
              imgPath={whizzact}
              isBlog={false}
              title="WhizzAct"
              description="WhizzAct persoal website that build with Angular and Bootstrap. WhizzAct Private Limited aims to deliver the supreme service at an effective cost, ensuring a complete customer satisfaction. Emphatic use of latest tools and technology, helps our clients to grow and promote their businesses worldwide."
              ghLink="https://github.com/anurag4499/A-whizzact"
              demoLink="https://whizzact.com/#/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Boru}
              isBlog={false}
              title="Boru Customer"
              description="It is E-Commerce website build using Angular, Bootstrap and SpringBoot. Boru connects customers directly with stores.
                              Increase efficiency of small vendors by organizing their orders and making day to day life of customers easy by keeping all the records."
              ghLink="https://github.com/anurag4499/boru_customer"
              demoLink="https://styletribals.com/#/home/profile/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fuchicrop}
              isBlog={false}
              title="fuchiCrop  "
              description="Online learning platform using Django. Come and join us! Learn, contribute and expand your knowledge in IT with FuchiCorp Academy. Gain hands-on experinece with these tools: Kubernetes, Docker, Helm, Packer, Terraform, Jenkins (CI/CD), Nexus, Prometheus, Grafana, ELK Stack, Cert-manager, Ingress Controller, External DNS, Sonarqube, Rancher, Lens and more!"
              ghLink="https://github.com/anurag4499/Editor.io"
              demoLink="https://academy.fuchicorp.com/"              
            />
          </Col>

        
        </Row>


        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/anurag4499"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com9"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/anurag-mishra-6b8934202/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Projects;
