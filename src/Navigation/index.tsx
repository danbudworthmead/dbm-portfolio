import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <Navbar
            bg="secondary"
            expand="lg"
            fixed="top"
            variant="dark"
            className="shadow-lg"
            collapseOnSelect={true}
        >
            <Container>
                <Navbar.Brand className="text-primary p-2" as={Link} to={"/"}>
                    DBM
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            eventKey="1"
                            as={Link}
                            to={"/"}
                            className="text-primary"
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            eventKey="2"
                            as={Link}
                            to={"/about"}
                            className="text-primary"
                        >
                            About
                        </Nav.Link>
                        <Nav.Link
                            eventKey="3"
                            as={Link}
                            to={"/contact"}
                            className="text-primary"
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                    <NavDropdown
                        title="Portfolio"
                        id="nav-dropdown"
                        menuVariant="dark"
                    >
                        <NavDropdown.Item as={Link} to={"/skeldnet"}>
                            Skeld.net
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/tsr"}>
                            Team Sonic Racing
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/forza"}>
                            Forza Horizon
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/avakin"}>
                            Avakin Life
                        </NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
