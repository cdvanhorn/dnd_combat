import React from "react";

const ATTRIBUTE_SKILL_MAP = {
    strength: ["Athletics"],
    dexterity: ["Acrobatics", "Sleight of Hand", "Stealth"]
}

export default class AttributeGroup extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h5>Strength</h5>
                <Grid fluid>
                    <Row>
                        <Col sm={6}>Value</Col>
                        <Col sm={6}>Modifier</Col>
                    </Row>
                </Grid>
            </React.Fragment>
        );
    }
}