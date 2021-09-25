import React from "react";
import { Form, Button, Col, Container, Row } from "react-bootstrap";
import "../Component/Logins/Login.css";

const Login = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={6} md={6}>
            <Form className="logins">
              <h2 className="title">
                Create your Blue<span style={{ color: `orange` }}>let</span>{" "}
                account
              </h2>

              <input
                type="text"
                name="location"
                placeholder="full name"
                className="info"
              />

              <input
                type="email"
                name="location"
                placeholder="email"
                className="infos"
              />
              <input
                type="password"
                name="location"
                placeholder="password"
                className="infos"
              />
              <input
                type="confirm password"
                name="location"
                placeholder="confirm passeord"
                className="infos"
              />

              <Button variant="dark" type="submit" className="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col sm={6} md={6}>
            <Form className="logins">
              <h2 className="title">Login</h2>
              <input
                type="email"
                name="location"
                placeholder="email"
                className="infos"
              />
              <input
                type="password"
                name="location"
                placeholder="password"
                className="infos"
              />
              <Button variant="dark" type="submit" className="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
