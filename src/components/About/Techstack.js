import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
 
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="c++">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Javascript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons"  title="Nodejs">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons"  title="Mongodb">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons"  title="Next.js">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postgresql">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Java">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
