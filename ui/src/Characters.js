import React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PlayerCharacterList from './forms/elements/PlayerCharacterList.js';
import Search from './forms/Search.js';
import PlayerCharacterForm from "./forms/PlayerCharacter.js";

import { rdmCap } from "./Utilities";


class Characters extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <h3>{rdmCap('Player Characters')}</h3>
                <hr/>
                <Row>
                    <Col sm={4}>
                        <Search>
                            <PlayerCharacterList />
                        </Search>
                    </Col>
                    <Col sm={8}>
                        <PlayerCharacterForm />
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Characters;
