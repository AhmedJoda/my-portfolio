import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.styles.css";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  return (
    <div data-aos="fade-down" id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">
        {t("contact me")}
      </h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a
                href="mailto:ahmedjodaalmory99@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline-danger"
                  title="ahmedjodaalmory99@gmail.com"
                >
                  <i className="fas fa-envelope-square"></i> {t("email me")}
                </Button>
              </a>
            </div>

            <div className="m-2">
              <a
                href="https://wa.me/00201211779758"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline-success"
                  title="chat with me on whatsapp"
                >
                  <i className="fa fa-whatsapp"></i> Whatsapp
                </Button>
              </a>
            </div>

            <div className="m-2">
              <a
                href="https://www.linkedin.com/in/ahmed-joda-829315198/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>

            <div className="m-2">
              <a
                href="https://github.com/AhmedJoda"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default ContactForm;
