import React from "react";
import Navbar from "react-bootstrap/lib/Navbar"
import Nav from "react-bootstrap/lib/Nav"
import Container from "react-bootstrap/lib/Container"

import Characters from "./Characters.js";

import { rdmCap } from "./Utilities";

const containerStyle = {
    paddingTop: '20px'
};

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
        } else {
            content = <h3>Unknown Page, {this.state.activePage}</h3>;
        }
        

        return (
            <React.Fragment>
                <Navbar expand="lg" variant="dark" bg="dark">
                    <Navbar.Brand>{rdmCap("combat tracker")}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav
                            activeKey={this.state.activePage}
                            onSelect={this.setActivePage}
                        >
                            {/*security group memory face settings*/}
                            <Nav.Link eventKey="Combat">Tracker</Nav.Link>
                            <Nav.Link eventKey="Encounters">Encounters</Nav.Link>
                            <Nav.Link eventKey="Npcs">Non-Player Characters</Nav.Link>
                            <Nav.Link eventKey="Characters">Player Characters</Nav.Link>
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