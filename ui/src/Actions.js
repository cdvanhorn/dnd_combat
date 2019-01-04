import React from "react";

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import ActionList from './forms/elements/ActionList.js';
import Search from './forms/Search.js';
import { rdmCap } from "./Utilities";


class Actions extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <h3>{rdmCap('Player Actions')}</h3>
                <hr/>
                <Row>
                    <Col sm={4}>
                        <Search>
                            <ActionList />
                        </Search>
                    </Col>
                    <Col sm={8}>
                        Action Details
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Actions;