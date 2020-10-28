import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div data-aos="fade-up" id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">{t("about me")}</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  thumbnail
                  fluid
                  data-aos=""
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row
                dir="auto"
                className=" align-items-start p-2 my-details rounded"
              >
                {t("hi there")}
                <br />
                <strong>&nbsp;{t("name")}</strong>
                <br />
                {t("web")}
                <br />
                {t("game")}
                <br />
                {t("goal")}
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        {t("talk")}
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1ei8LEwDmRabpII_52Ju2Q6s-OHjFmsXe/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        {t("resume")}
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/AhmedJoda"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        {t("github")}
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/ahmed-joda-829315198/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        {t("linkedin")}
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
