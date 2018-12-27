import React from "react";

import Container from "react-bootstrap/lib/Container";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Form from "react-bootstrap/lib/Form";

const ATTRIBUTE_SKILL_MAP = {
    strength: ["Athletics"],
    dexterity: ["Acrobatics", "Sleight of Hand", "Stealth"],
    intelligence: ["Arcana", "History", "Investigation", "Nature", "Religion"],
    wisdom: ["Animal Handling", "Insight", "Medicine", "Perception", "Survival"],
    charisma: ["Deception", "Intimidation", "Performance", "Persuasion"]
}

export default class AttributeGroup extends React.Component {
    generateBaseStatBlock = (attribute, character) => {
        let cap_attr = attribute.charAt(0).toUpperCase() + attribute.slice(1);
        let modifier = (character[attribute] - 10) / 2;
        modifier = Math.floor(modifier);
        if(modifier > 0) {
            modifier = "+" + modifier.toString();
        } else if(modifier < 0) {
            modifier = modifier.toString();
        }
        return (
            <React.Fragment>
            <Row>
                <Col>{cap_attr}</Col>
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
                    {modifier}
                </Col>
            </Row>
            </React.Fragment>
        );
    }

    render() {
        let sbblock = this.generateBaseStatBlock("strength", this.props.character);
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