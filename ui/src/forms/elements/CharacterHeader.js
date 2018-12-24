import React from "react";

import Container from "react-bootstrap/lib/Container";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Form from "react-bootstrap/lib/Form";

import {rdmCap} from "../../Utilities.js";

export default class CharacterHeader extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={1}>
                    </Col>
                    <Col sm={11}>
                        <Form.Group as={Col} controlId="formGridSearch">
                            <Form.Label>Character Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={rdmCap("character name")}
                                value={this.props.character.name}
                                onChange={this.props.handleChange.bind(this, 'name')}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                {/*
                <Row>
                    <Col sm={4}>
                        <Input
                            type='number'
                            label='Level'
                            name='level'
                            value={this.props.character.level}
                            onChange={this.props.handleChange.bind(this, 'level')}
                        />
                    </Col>
                    <Col sm={4}>
                        <Dropdown
                            label="Race"
                            auto
                            source={this.props.races}
                            value={this.props.character.race_id}
                            labelKey={"name"}
                            valueKey={"id"}
                            onChange={this.props.handleChange.bind(this, 'race_id')}
                        />
                    </Col>
                    <Col sm={4}>
                        <Dropdown
                            label="Class"
                            auto
                            source={this.props.classes}
                            value={this.props.character.class_id}
                            labelKey={"name"}
                            valueKey={"id"}
                            onChange={this.props.handleChange.bind(this, 'class_id')}
                        />
                    </Col>
                </Row>
                */}
            </Container>
        );
    }
}