import React from "react";

import Container from "react-bootstrap/lib/Container";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Form from "react-bootstrap/lib/Form";

import {capFirst} from "../../Utilities";
import {PlayerCharacter} from "../../models/PlayerCharacter";

const ATTRIBUTE_SKILL_MAP = {
    strength: ["athletics"],
    dexterity: ["acrobatics", "sleight_of_hand", "stealth"],
    intelligence: ["arcana", "history", "investigation", "nature", "religion"],
    wisdom: ["animal_handling", "insight", "medicine", "perception", "survival"],
    charisma: ["deception", "intimidation", "performance", "persuasion"]
}

export default class AttributeGroup extends React.Component {
    generateBaseStatBlock = (attribute, character) => {
        return (
            <React.Fragment>
            <Row>
                <Col>{capFirst(attribute)}</Col>
            </Row>
            <hr />
            <Row>
                <Col sm={6}>
                    <Form.Control
                        type="number"
                        value={character[attribute]}
                        onChange={this.props.handleChange.bind(this, attribute)}
                    />
                </Col>
                <Col sm={6}>
                    {character.modifierString(attribute)}
                </Col>
            </Row>
            </React.Fragment>
        );
    }

    generateSkillBlock = (attribute, character) => {

    }

    render() {
        let pc = new PlayerCharacter(this.props.character);
        let sbblock = this.generateBaseStatBlock("strength", pc);
        return (
            <Container>
                <Row>
                    <Col sm={4}>
                        {sbblock}
                    </Col>
                    <Col sm={8}>
                        <Row>
                            <Col sm={6}>
                                Athletics +5
                            </Col>
                            <Col sm={6}>
                                Acrobatics +7
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                Athletics +5
                            </Col>
                            <Col sm={6}>
                                Acrobatics +7
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}