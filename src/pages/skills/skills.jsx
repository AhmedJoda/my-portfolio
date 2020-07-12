import React from "react";
import MyCard from "./common/myCard";
import skills from "./skillsData";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Skills = () => {
  return (
    <Col id="skills" md={"auto"}>
      <h1 className="text-center font-details-b pb-4">SKILLS</h1>
      <Row>
        <Col>
          <MyCard
            title="Programing Languages"
            skills={skills.programingLanguages}
          />
        </Col>
        <Col>
          <MyCard title="Game Deveolpment" skills={skills.gamedeveolpment} />
        </Col>
      </Row>
      <MyCard title="Frontend" skills={skills.frontend} />
      <div>
        <Row>
          <Col>
            <MyCard title="Backend" skills={skills.backend} />
          </Col>
          <Col>
            <MyCard title="Database" skills={skills.database} />
          </Col>
        </Row>
        <Row>
          <Col>
            <MyCard
              title="Hosting Platforms"
              skills={skills.hostingPlatforms}
            />
          </Col>
          <Col>
            <MyCard title="Version Control" skills={skills.versionControl} />
          </Col>
        </Row>
        <MyCard title="Editing and Visual Effects" skills={skills.editing} />
        <MyCard title="Languages" skills={skills.languages} />
      </div>
    </Col>
  );
};

export default Skills;
