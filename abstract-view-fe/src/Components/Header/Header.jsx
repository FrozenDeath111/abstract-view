import React from "react";

//Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

//MUI
import Switch from "@mui/material/Switch";
import { Avatar } from "@mui/material";
import Person4Icon from "@mui/icons-material/Person4";
import { Link } from "react-router-dom";

//Other
import "./Header.css";

const Header = (props) => {
  const [mode, setMode] = props.theme;
  const wTheme = "#FFF";
  const bTheme = "#000";

  const handleChange = (event, eventKey) => {
    console.log(eventKey);
    setMode(event.target.checked);
    const bgTheme = document.getElementById("root-body");
    if (mode) {
      bgTheme.style.backgroundColor = wTheme;
      bgTheme.style.color = bTheme;
    } else {
      bgTheme.style.backgroundColor = bTheme;
      bgTheme.style.color = wTheme;
    }
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      data-bs-theme={mode ? "dark" : "light"}
    >
      <Container>
        <Link to={"/"}>
          <Navbar.Brand>Logo</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Menu" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="theme">
              </NavDropdown.Item>
            </NavDropdown>
            <Switch
                      checked={mode}
                      onChange={handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />
          </Nav>
          <Nav className="justify-content-end">
            <Avatar sx={{ bgcolor: mode ? bTheme : wTheme }} variant="rounded">
              <Person4Icon sx={{ color: mode ? wTheme : bTheme }} />
            </Avatar>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
