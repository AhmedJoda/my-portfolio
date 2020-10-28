import React from "react";
import MyCard from "./common/myCard";
import skills from "./skillsData";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <Col id="skills" md={"auto"}>
      <h1 className="text-center font-details-b pb-4">{t("Skills")}</h1>
      <Row>
        <Col>
          <MyCard
            title={t("programing languages")}
            skills={skills.programingLanguages}
          />
        </Col>
        <Col>
          <MyCard
            title={t("game development")}
            skills={skills.gamedeveolpment}
          />
        </Col>
      </Row>
      <MyCard title={t("front end")} skills={skills.frontend} />
      <div>
        <Row>
          <Col>
            <MyCard title={t("backend")} skills={skills.backend} />
          </Col>
          <Col>
            <MyCard title={t("database")} skills={skills.database} />
          </Col>
        </Row>
        <Row>
          <Col>
            <MyCard
              title={t("hosting platforms")}
              skills={skills.hostingPlatforms}
            />
          </Col>
          <Col>
            <MyCard
              title={t("version control")}
              skills={skills.versionControl}
            />
          </Col>
        </Row>
        <MyCard
          title={t("editing and visual effects")}
          skills={skills.editing}
        />
        <MyCard title={t("languages")} skills={skills.languages} />
      </div>
    </Col>
  );
};

export default Skills;
