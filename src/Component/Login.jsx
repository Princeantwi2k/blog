import React, { Component } from "react";
import { Form, Button, Col, Container, Row } from "react-bootstrap";
import { ADD_USER } from "../Action/AccessAction";
import "../Component/Logins/Login.css";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      password: "",
      confirmpassword: "",
      logemail: "",
      logpass: "",
    };
  }
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("it is working");
    this.props.NewUser(this.state);
    this.setState({
      fullname: "",
      email: "",
      password: "",
      comfirmpassword: "",
      logemail: "",
      logpass: "",
    });
  };

  render() {
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
                  name="fullname"
                  placeholder="full name"
                  className="info"
                  onChange={this.handleChange}
                  value={this.state.fullname}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="infos"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="infos"
                  onChange={this.handleChange}
                  value={this.state.password}
                />
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="confirm passeord"
                  className="infos"
                  onChange={this.handleChange}
                  value={this.state.comfirmpassword}
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
                  name="logemail"
                  placeholder="email"
                  className="infos"
                  onChange={this.handleChange}
                  value={this.state.logemail}
                />
                <input
                  type="password"
                  name="logpass"
                  placeholder="password"
                  className="infos"
                  onChange={this.handleChange}
                  value={this.state.logpass}
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
  }
}
const mapDispatchToprops = {
  NewUser: ADD_USER,
};
export default connect(null, mapDispatchToprops)(Login);
