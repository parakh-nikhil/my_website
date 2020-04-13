import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";

class NavigationBar extends Component {
	render() {
		return (
			<Navbar fixed="top" expand="lg" bg="dark" variant="dark">
				<Navbar.Brand href="/">Nikhil Parakh</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav>
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/photography">Photography</Nav.Link>
						<Nav.Link href="/contact">Contact Me</Nav.Link>
						<NavDropdown title="Projects" id="collasible-nav-dropdown">
							<NavDropdown.Item href="/projects/project1">
								Project1
							</NavDropdown.Item>
							<NavDropdown.Item href="/projects/project2">
								Project2
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default NavigationBar;
