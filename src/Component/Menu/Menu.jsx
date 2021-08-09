import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-bootstrap";
import "./Menu.css";
class Menu extends Component {
  render() {
    return (
      <>
        <Container>
          <ul className="super-links">
            <NavLink to="" className="super">
              MOBILE PHONE
            </NavLink>
            <NavLink to="" className="super">
              LAPTOPS & DESKTOP
            </NavLink>
            <NavLink to="" className="super">
              TVS & PROJECTORS
            </NavLink>
            <NavLink to="" className="super">
              ACCESSORIES
            </NavLink>
            <NavLink to="" className="super">
              PRINTER
            </NavLink>
            <NavLink to="" className="super">
              SPEAKERS
            </NavLink>
            <NavLink to="" className="super">
              FASHION
            </NavLink>
            <NavLink to="" className="super">
              Baby Product
            </NavLink>
          </ul>
        </Container>
      </>
    );
  }
}

export default Menu;
