import React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ActionList from './forms/elements/ActionList.js';
import Search from './forms/Search.js';
import ActionForm from './forms/Actions.js';
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
                        <ActionForm />
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Actions;
