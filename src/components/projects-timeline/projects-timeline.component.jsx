import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import SinsOfTheOceans from "../../assets/img/projects/sinsoftheoceans.webp";
import WILD from "../../assets/img/projects/wild.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import L_REACT from "../../assets/img/skills/react.svg";
import L_PYTHON from "../../assets/img/skills/python.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_UNREAL_ENGINE from "../../assets/img/skills/unreal.svg";

import "./projects-timeline.styles.css";

export default function TimeLine() {
  return (
    <div data-aos="fade-up" id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
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
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        an adventure-Narrati video game developed by MIST team
                        using Unreal Engine.
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
                              Unreal Engine
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
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://www.youtube.com/watch?v=GJ825HreLJw"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
}
