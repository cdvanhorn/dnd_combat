import React from "react";
import Navbar from "react-bootstrap/lib/Navbar";
import Nav from "react-bootstrap/lib/Nav";
import Container from "react-bootstrap/lib/Container";
import NavDropdown from "react-bootstrap/lib/NavDropdown";

import Characters from "./Characters.js";
import Actions from "./Actions.js";

import { rdmCap } from "./Utilities";

const containerStyle = {
    paddingTop: '20px'
};

const navLinkPadding = {
    paddingRight: '80px'
}

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: "Combat"
        };
        this.setActivePage = this.setActivePage.bind(this);
    }

    setActivePage(selectedKey) {
        this.setState({
            activePage: selectedKey
        });
    }

    render() {
        let content;
        if (this.state.activePage == "Characters") {
            content = React.createElement(Characters, {app: this}, null);
        } else if(this.state.activePage == "Actions") {
            content = React.createElement(Actions, {app: this}, null);
        } else {
            content = <h3>Unknown Page, {this.state.activePage}</h3>;
        }
        

        return (
            <React.Fragment>
                <Navbar expand="lg" variant="dark" bg="dark">
                    <Navbar.Brand>{rdmCap("combat tracker")}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" style={navLinkPadding}>
                        <Nav
                            activeKey={this.state.activePage}
                            onSelect={this.setActivePage}
                        >
                            {/*security group memory face settings*/}
                            <Nav.Link eventKey="Combat">Tracker</Nav.Link>
                            <NavDropdown title="Data">
                                <NavDropdown.Item eventKey="Encounters">Encounters</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="Npcs">Non-Player Characters</NavDropdown.Item>
                                <NavDropdown.Item eventKey="Characters">Player Characters</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="Actions">Player Actions</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link eventKey="Settings">Settings</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Container style={containerStyle}>
                    {content}
                </Container>
            </React.Fragment>
        );
    }
}

export default Application;