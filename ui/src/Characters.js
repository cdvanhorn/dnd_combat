import React from "react";

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import PlayerCharacterSearch from './searches/PlayerCharacter.js';
import PlayerCharacterDetails from './details/PlayerCharacter.js';

import { rdmCap } from "./Utilities";


class Characters extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <h3>{rdmCap('Player Characters')}</h3>
                <Row>
                    <Col sm={4}>
                        Search
                        {/*<PlayerCharacterSearch />*/}
                    </Col>
                    <Col sm={8}>
                        Details
                        {/*<PlayerCharacterDetails />*/}
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Characters;