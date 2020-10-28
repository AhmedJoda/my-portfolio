import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import SinsOfTheOceans from "../../assets/img/projects/sinsoftheoceans.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import L_UNREAL_ENGINE from "../../assets/img/skills/unreal.svg";
import { useTranslation } from "react-i18next";
import "./projects-timeline.styles.css";

export default function TimeLine() {
  const { t } = useTranslation();
  return (
    <div data-aos="fade-up" id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">{t("Projects")}</h1>
      <Timeline>
        <Events>
          {/* Project: WILD */}
          {/* <ImageEvent
            date="2019"
            className="text-center"
            text="WILD - WEARABLE INTELLIGENT LIMITLESS
            DEVICE"
            src={WILD}
            alt="WILD - WEARABLE INTELLIGENT LIMITLESS
            DEVICE"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        a smart wearable device that can have your data with
                        social media application that allows you only to add
                        people through real-world, with other multiple
                        functions.
                        <hr />
                        <hr />
                        <strong>WILD</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React Naitve"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React Naitve
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PYTHON}
                                alt="Python"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Python
                            </span>
                          </li>
                        </ul>
                        <hr />
                        <ul>
                          <li>not released yet</li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </ImageEvent> */}
          {/* Project: Sins Of The Oceans */}

          <ImageEvent
            date="2018"
            className="text-center"
            text="Sins Of The Oceans"
            src={SinsOfTheOceans}
            alt="Sins Of The Oceans"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      {t("project details")}
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body className="soto" dir="auto">
                        {t("soto")}
                        <hr />
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_UNREAL_ENGINE}
                                alt="Unreal Engine"
                                rounded
                                className="image-style m-1"
                              ></Image>
                              {t("unreal engine")}
                            </span>
                          </li>
                        </ul>
                        <hr />
                        <ul>
                          <li>{t("not released yet")}</li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://www.youtube.com/watch?v=GJ825HreLJw"
                  target="_blank"
                >
                  {t("watch video")}
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
}
