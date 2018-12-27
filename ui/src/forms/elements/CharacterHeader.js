import React from "react";

import Container from "react-bootstrap/lib/Container";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Form from "react-bootstrap/lib/Form";

import {rdmCap} from "../../Utilities.js";

export default class CharacterHeader extends React.Component {
    generateOptions = (objects) => {
        return objects.map( (obj) => {
            return (
                <option key={obj.id} value={obj.id}>{obj.name}</option>
            );
        });
    }

    render() {
        let race_options = this.generateOptions(this.props.races);
        let class_options = this.generateOptions(this.props.classes);
        return (
            <Container>
                <Row>
                    <Col sm={1}>
                    </Col>
                    <Col sm={11}>
                        <Form.Group as={Col} controlId="formGridCharacterName">
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
                <Row>
                    <Col sm={4}>
                        <Form.Group as={Col} controlId="formGridCharacterLevel">
                            <Form.Label>Level</Form.Label>
                            <Form.Control
                                type="number"
                                value={this.props.character.level}
                                onChange={this.props.handleChange.bind(this, 'level')}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={4}>
                        <Form.Group controlId="formGridRace">
                            <Form.Label>Race</Form.Label>
                            <Form.Control
                                as="select"
                                value={this.props.character.race_id}
                                onChange={this.props.handleChange.bind(this, 'race_id')}
                            >
                                {race_options}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm={4}>
                        <Form.Group controlId="formGridClass">
                            <Form.Label>Class</Form.Label>
                            <Form.Control
                                as="select"
                                value={this.props.character.class_id}
                                onChange={this.props.handleChange.bind(this, 'class_id')}
                            >
                                {class_options}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        );
    }
}