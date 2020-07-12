import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ".././skills.styles.css";

const MyCard = (props) => {
  return (
    <div data-aos="fade-up" className="pt-3 pb-3">
      <CardDeck>
        <Col className="d-flex justify-content-around">
          <Card className="focus mt-2 mb-2">
            <Card.Body>
              <Card.Title className="text-center title">
                {props.title}
              </Card.Title>
              <hr />
              <Row>
                {props.skills.map((skill) => (
                  <Col className="m-auto" data-aos="fade-up" md={"auto"}>
                    <span className="m-2">
                      <a
                        className="text-dark text-decoration-none"
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skill.img}
                          alt={skill.name}
                          rounded
                          className="image-style"
                        ></Image>
                        <Card.Title className="text-center mt-5">
                          {skill.name}
                        </Card.Title>
                      </a>
                    </span>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </CardDeck>
    </div>
  );
};

export default MyCard;
