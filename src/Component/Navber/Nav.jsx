import React, { Component } from "react";
import { Navbar, Form, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import "./Nav.css";
import { Link } from "react-router-dom";

class Nav extends Component {
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <Container fluid className=" fixed-top">
          <Row>
            <Col sm={6} md={12}>
              <Navbar expand="lg" variant="light" bg="light">
                <Container fluid className="navbar">
                  <Navbar.Brand>
                    {" "}
                    <h3
                      style={{
                        marginLeft: `10%`,
                        fontSize: `40px`,
                        fontWeight: `bolder`,
                        fontStyle: `italic`,
                      }}
                    >
                      Blue
                      <span
                        style={{ color: `orange`, fontFamily: `sans-serif` }}
                      >
                        Let
                      </span>
                    </h3>
                  </Navbar.Brand>
                  <Form className="d-flex ">
                    <input
                      type="search"
                      placeholder="Search ,product ,brands, and categories"
                      className="mr-2 search"
                      aria-label="Search"
                    />
                    <Button variant="warning">Search</Button>
                  </Form>
                  <div className="navlinks">
                    <Link to="/" className="drop">
                      HOME
                    </Link>
                    <Link to="/login" className="drops">
                      ACCOUNT
                    </Link>
                  </div>
                </Container>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Nav;
