import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import {rdmCap} from "../../Utilities.js";

export default class ActionHeader extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={12}>
                        <Form.Group as={Col} controlId="formGridActionName">
                            <Form.Label>Action Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={rdmCap("action name")}
                                value={this.props.action.name}
                                onChange={this.props.handleChange.bind(this, 'name')}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <Form.Group as={Col} controlId="formGridActionRoll">
                            <Form.Label>Roll</Form.Label>
                            <Form.Control
                                type="text"
                                value={this.props.action.succeed_roll}
                                onChange={this.props.handleChange.bind(this, 'succeed_roll')}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={3}>
                        <Form.Group controlId="formGridActionAgainst">
                            <Form.Label>Against</Form.Label>
                            <Form.Control
                                as="select"
                                onChange={this.props.handleChange.bind(this, 'against')}
                            >
                                <option value="source">Source</option>
                                <option value="target">Target</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm={3}>
                        <Form.Group controlId="formGridActionCompare">
                            <Form.Label>Attribute</Form.Label>
                            <Form.Control
                                as="select"
                                value={this.props.action.succeed_compare}
                                onChange={this.props.handleChange.bind(this, 'succeed_compare')}
                            >
                                <option value="armorclass">Armor Class</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm={3}>
                        <Form.Group as={Col} controlId="formGridActionDC">
                            <Form.Label>DC</Form.Label>
                            <Form.Control
                                type="number"
                                value={this.props.action.succeed_dc}
                                onChange={this.props.handleChange.bind(this, 'succeed_dc')}
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        );
    }
}
