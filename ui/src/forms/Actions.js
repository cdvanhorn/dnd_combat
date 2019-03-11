import React from "react";
import { connect } from "react-redux";

import Container from "react-bootstrap/lib/Container";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Form from "react-bootstrap/lib/Form";

import BaseForm from "./Base.js";
import {rdmCap} from "../Utilities.js";
import {fetchEffects} from "../redux/actions/effects.js";
import ActionEffectList from "./elements/ActionEffectList.js";

const mapStateToProps = state => {
    return {
        "action": state.actions.ui_selected_action,
        "effects": state.effects.items
    };
};

class ActionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.isDisabled = this.isDisabled.bind(this);
    }

    componentDidMount = () => {
        this.props.fetchEffects('http://localhost:3001/effects');
    }

    handleChange = (name, event) => {
        //update which fields are dirty
        if(this.state[this.props.action.id]) {
            this.setState({
                [this.props.action.id]: Object.assign(this.state[this.props.action.id], {[name]: true})
            })
        } else {
            this.setState({
                [this.props.action.id]: {[name]: true}
            })
        }
    }

    handleSave = (event) => {
        console.log(event);
    }

    handleDelete = () => {
        //this.props.deletePlayerCharacter('http://localhost:3001/pcs', this.props.character);
        console.log("delete action");
    }

    isDisabled = () => {
        if(this.state[this.props.action.id]) {
            return !Object.keys(this.state[this.props.action.id]).length > 0;
        } else {
            return true;
        }
    }

    render() {
        return (
            <BaseForm 
                saveDisabled={this.isDisabled()}
                object={this.props.action}
                handleDelete={this.handleDelete}
                handleChange={this.handleChange}
                handleSave={this.handleSave}
            >
                <h3>Action Information</h3>
                <hr />
                <Container>
                    <Row>
                        <Col sm={12}>
                            <Form.Group as={Col} controlId="formGridActionName">
                                <Form.Label>Action Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder={rdmCap("action name")}
                                    value={this.props.action.name}
                                    onChange={this.handleChange.bind(this, 'name')}
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
                                    onChange={this.handleChange.bind(this, 'succeed_roll')}
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={3}>
                            <Form.Group controlId="formGridActionAgainst">
                                <Form.Label>Against</Form.Label>
                                <Form.Control
                                    as="select"
                                    onChange={this.handleChange.bind(this, 'against')}
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
                                    onChange={this.handleChange.bind(this, 'succeed_compare')}
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
                                    onChange={this.handleChange.bind(this, 'succeed_dc')}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <h3>Source Effects</h3>
                    <hr />
                    <ActionEffectList
                        all_effects={this.props.effects}
                        effects={this.props.action.source_effects}
                    />
                    <h3>Target Effects</h3>
                    <hr />
                    <ActionEffectList
                        all_effects={this.props.effects}
                        effects={this.props.action.target_effects}
                    />
                    <h3>Failure Source Effects</h3>
                    <hr />
                    <ActionEffectList
                        all_effects={this.props.effects}
                        effects={this.props.action.fail_source_effects}
                    />
                    <h3>Failure Target Effects</h3>
                    <hr />
                    <ActionEffectList
                        all_effects={this.props.effects}
                        effects={this.props.action.fail_target_effects}
                    />
                </Container>
            </BaseForm>
        );
    }
}

export default connect(
    mapStateToProps,
    {
        fetchEffects
    }
)(ActionForm);