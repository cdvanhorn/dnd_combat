import React from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import PlayerCharacterSearch from './searches/PlayerCharacter.js';

class PlayerCharacterDetails extends React.Component {
    render() {
        return (
            <p>Player Character Details</p>
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