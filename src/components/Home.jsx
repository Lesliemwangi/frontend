import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function HomePage() {
  return (
    <Container fluid className="homePage">
      <Row className="text-center text-white mb-5">
        <Col>
          <h1
            className="display-4"
            style={{
              fontSize: "4.0rem",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Find Real Estate & Get Your Dream Place
          </h1>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col xs={12} md={6} className="text-center">
          <Image
            src="https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs="
            alt=""
            fluid
            className="rounded"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "15px" }}
          />
        </Col>
        <Col xs={12} md={6} className="text-center">
          <p className="text-white" style={{ fontSize: "2.0rem" }}>
            Welcome to Luciannah Ventures Real Estate, where we connect
            individuals and businesses with their ideal properties. Our mission
            is to guide you every step of the way, ensuring an unparalleled
            service experience. With a holistic approach blending industry
            knowledge and passion for delivering tailored solutions, we make
            your real estate journey fulfilling and successful. Partner with
            Luciannah Ventures Real Estate today and embark on a journey where
            excellence meets innovation.
          </p>
        </Col>
      </Row>
      <Row className="text-center mb-5">
        <Col xs={12} md={4}>
          <div className="bg-light shadow p-3 mb-5 rounded text-center">
            <p className="display-4" style={{ fontSize: "3.0rem", fontWeight: "bold" }}>
              15 years
            </p>
            <p style={{ fontSize: "1.5rem" }}>Years of Experience</p>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="bg-light shadow p-3 mb-5 rounded text-center">
            <p
              className="display-4"
              style={{ fontSize: "3.0rem", fontWeight: "bold" }}
            >
              5
            </p>
            <p style={{ fontSize: "1.5rem" }}>Award Gains</p>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="bg-light shadow p-3 mb-5 rounded text-center">
            <p
              className="display-4"
              style={{ fontSize: "3.0rem", fontWeight: "bold" }}
            >
              100+
            </p>
            <p style={{ fontSize: "1.5rem" }}>Properties Ready</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
