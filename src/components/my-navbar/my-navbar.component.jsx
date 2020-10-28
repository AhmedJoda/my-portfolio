import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./my-navbar.styles.css";
import { useTranslation } from "react-i18next";

const MyNavbar = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar
        fixed="top"
        variant="dark"
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Nav.Link href="#home">{t("home")}</Nav.Link>
              <Nav.Link href="#about">{t("about")}</Nav.Link>
              <Nav.Link href="#skills">{t("skills")}</Nav.Link>
              <Nav.Link href="#projects">{t("projects")}</Nav.Link>
              <Nav.Link href="#contact">{t("contact")}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
