import React, { Component } from "react";
import { Navbar, Form, Button, FormControl } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import "./Nav.css";
import { Link } from "react-router-dom";

class Nav extends Component {
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmite() {
    console.log("it has happen");
  }

  render() {
    return (
      <>
        <Navbar expand="lg" variant="light" bg="light">
          <Container fluid className="navbar fixed-top fixed-contiane">
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
                <span style={{ color: `orange`, fontFamily: `sans-serif` }}>
                  Let
                </span>
              </h3>
            </Navbar.Brand>
            <Form className="d-flex search">
              <FormControl
                type="search"
                placeholder="phone,tv,fashion"
                className="mr-2 "
                aria-label="Search"
              />
              <Button variant="warning" className="searchbuttom">
                Search
              </Button>
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
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { brand: state };
};

export default connect(mapStateToProps)(Nav);
