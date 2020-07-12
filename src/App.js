import React, { Component } from "react";
import AOS from "aos";
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import Skills from "./pages/skills/skills";
import MyTitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import Container from "react-bootstrap/Container";
import TimeLine from "./components/projects-timeline/projects-timeline.component";
import Fade from "react-reveal/Fade";
import ContactForm from "./pages/contact-form/contact-form.component";
import { Parallax } from "react-parallax";
import FooterPanel from "./components/footer/footer.component";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ position: "relative" }}>
        <MyCarousal />
        <MyTitleMessage />
        <MyNavbar />
        {/* <Particles className="particles particles-box" params={particlesOptions} /> */}

        <div>
          <Parallax
            blur={{ min: -30, max: 30 }}
            bgImage={require("./assets/img/parallex/background.webp")}
            bgImageAlt=""
            strength={-200}
          >
            <div>
              <Container className="container-box rounded">
                <Fade duration={700}>
                  <About />
                </Fade>
              </Container>
            </div>
          </Parallax>
        </div>
        <Container className="container-box rounded">
          <Fade duration={700}>
            <hr />

            <Skills />
          </Fade>
        </Container>

        <Container className="container-box rounded">
          <Fade duration={700}>
            <hr />
            <TimeLine />
          </Fade>
        </Container>
        <Container className="container-box rounded">
          <Fade duration={700}>
            <hr />
            <ContactForm />
          </Fade>
        </Container>

        <hr />
        <FooterPanel />
      </div>
    );
  }
}

AOS.init();

export default App;
