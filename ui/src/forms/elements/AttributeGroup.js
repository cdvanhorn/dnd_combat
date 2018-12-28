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

    generateSkill = (attribute, skill, character) => {
        return (
            <Form.Check 
                type='checkbox'
                id={skill}
                label={capFirst(skill) + " " + character.skillString(attribute, skill)}
                onChange={this.props.handleChange.bind(this, 'proficiencies')}
                checked={character.proficient(skill)}
            />
        );
    }

    generateSkillBlock = (attribute, character) => {
        //iterate over the skills for this attribute
        let skills = []
        for(const skill of ATTRIBUTE_SKILL_MAP[attribute]) {
            skills.push(this.generateSkill(attribute, skill, character));
        }
        let rows = [];
        let count = 0;
        while(count < skills.length) {
            let first_skill = skills[count];
            let second_skill = null;
            if(count + 1 < skills.length) {
                second_skill = skills[count + 1];
            }
            if(second_skill) {
                rows.push(
                    <Row key={attribute + count}>
                        <Col sm={6}>
                            {first_skill}
                        </Col>
                        <Col sm={6}>
                            {second_skill}
                        </Col>
                    </Row>
                );
            } else {
                rows.push(
                    <Row key={attribute + count}>
                        <Col sm={6}>
                            {first_skill}
                        </Col>
                        <Col sm={6}>
                        </Col>
                    </Row>
                );
            }
            count = count + 2;
        }
        return (
            <React.Fragment>
            {rows}
            </React.Fragment>
        );
    }

    render() {
        let pc = new PlayerCharacter(this.props.character);
        let sbblock = this.generateBaseStatBlock("strength", pc);
        let ssblock = this.generateSkillBlock("strength", pc);
        return (
            <Container>
                <Row>
                    <Col sm={4}>
                        {sbblock}
                    </Col>
                    <Col sm={8}>
                        {ssblock}
                    </Col>
                </Row>
            </Container>
        );
    }
}