import React from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';

import Search from './Search.js';

class PlayerCharacterDetails extends React.Component {
    render() {
        return (
            <p>Player Character Details</p>
        );
    }
}

class PlayerCharacterSearch extends React.Component {
    render() {
        return (
            <Search />
        );
    }
}

class Characters extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col sm={4}>
                        <PlayerCharacterSearch />
                    </Col>
                    <Col sm={8}>
                        <PlayerCharacterDetails />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Characters;