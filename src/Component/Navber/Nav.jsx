import React, { Component } from "react";
import { Navbar, FormControl, Form, Button } from "react-bootstrap";
import { NavDropdown, Container, Row, Col } from "react-bootstrap";
import "./Nav.css";
import { connect } from "react-redux";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({});
  };
  render() {
    return (
      <>
        <Container fluid className=" fixed-top">
          <Row>
            <Col sm={6} md={12}>
              <Navbar className="Navbar">
                <h3
                  style={{
                    marginLeft: `10%`,
                    fontSize: `40px`,
                    fontWeight: `bolder`,
                    fontStyle: `italic`,
                  }}
                >
                  Blue
                  <span style={{ color: `orange`, fontFamily: `sans-serif` }}>
                    Let
                  </span>
                </h3>
                <Form className="d-flex form" onSubmit={this.handleSubmit}>
                  <FormControl
                    type="search"
                    name="input"
                    onChange={this.handleChange}
                    value={this.state}
                    placeholder="Search product, brands and categories"
                    className="mr-2 input"
                    aria-label="Search"
                  />
                  <Button variant="warning" size="sm">
                    Search
                  </Button>
                </Form>
                <NavDropdown
                  title="Account"
                  id="navbarScrollingDropdown day"
                  className="drop"
                >
                  <NavDropdown.Item href="#action3">Log In</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    MY Account
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Oders</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Help"
                  id="navbarScrollingDropdown"
                  className="drop"
                >
                  <NavDropdown.Item to="/">Home</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
const mapDispatchToProps = (state) => {
  return { state: state };
};

export default connect(null, mapDispatchToProps)(Nav);
