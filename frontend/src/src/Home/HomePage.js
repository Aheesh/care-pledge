import React from "react";
import { Container, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <Container
      className="landing-container dark-theme"
      style={{ width: "70vw" }}
    >
      <Header
        as="h1"
        style={{
          textAlign: "left",
          fontSize: "6em",
          paddingTop: "150px",
          marginBottom: "20px",
        }}
      >
        Redefining <i>Trust</i> in <br /> <u>Medical Crowdfunding</u> by
        Blockchain Transparency.
      </Header>
      <div style={{ textAlign: "left", paddingTop: "10px" }}>
        <Button
          className="left-aligned-button"
          style={{ padding: "20px", marginRight: "20px" }}
          as={Link}
          to="/projects"
        >
          View Projects
        </Button>
        <Button className="left-aligned-button" style={{ padding: "20px" }}>
          Start your own project
        </Button>
      </div>
      {/* <p> View Projects  | Start your own project</p> */}
    </Container>
  );
}

export default HomePage;
