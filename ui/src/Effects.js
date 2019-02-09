import React from "react";

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import EffectList from './forms/elements/EffectList.js';
import Search from './forms/Search.js';
import { rdmCap } from "./Utilities";


class Effects extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <h3>{rdmCap('Effects')}</h3>
                <hr/>
                <Row>
                    <Col sm={4}>
                        <Search>
                            <EffectList />
                        </Search>
                    </Col>
                    <Col sm={8}>
                        <p>Effect Form</p>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Effects;