import React from "react";
import { Container, Dropdown, DropdownButton, Nav, Navbar, Row, Image } from "react-bootstrap";
import "./navBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
//import logo from "../img/misiontic2.png"
export default class TopMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Navbar fixed="top" id="navbar" bg="primary" variant="dark">
                <Container>
                 {/* <img className="logo" src={logo} /> */}
                <Image className = "logo" src = "http://fauna.digital/udea/misiontic2.png"/>
                    <Navbar.Brand href="#home"> Grupo 14 MinTic <span id="usuario-sub-branm"></span>
                    </Navbar.Brand>
                    <NavbarToggle sria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            { /* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>*/}
                        </Nav>

                        <DropdownButton id="dropdown-basic-button" title="Usuario">
                            <Dropdown.Header id="dropdown-header">
                                <Row>
                                    <FontAwesomeIcon icon={faUserCircle} />
                                </Row>
                                <Row>
                                    Usuario
                                </Row>
                                <Dropdown.Divider />
                            </Dropdown.Header>
                            <Dropdown.Item href="#/action-1">Cerrar Sesion</Dropdown.Item>
                            {/*  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
                        </DropdownButton>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}