import React from "react";
import { connect } from "react-redux";

import BaseForm from "./Base.js";
import {fetchEffects} from "../redux/actions/effects.js";
import ActionHeader from "./elements/ActionHeader.js";
import ActionEffectList from "./elements/ActionEffectList.js";

import { updateSelectedAction } from "../redux/actions/actions.js";

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
    }

    componentDidMount = () => {
        this.props.fetchEffects('http://localhost:3001/effects');
    }

    handleChange = (name, event) => {
        let value = undefined;
        if(name === 'source_effects' || name === 'target_effects' || name === 'fail_source_effects' || name === 'fail_target_effects') {
            value = event;
        } else {
            value = event.target.value;
        }
        //keep numbers as numbers
        if(!isNaN(value) && typeof value !== "boolean" && value.length > 0) {
            value = parseInt(value);
        }
        console.log(value);
        if(name === 'source_effects') {
    
        } else if(name === 'target_effects') {

        } else if(name === 'fail_source_effects') {

        } else if(name === 'fail_target_effects') {

        } else {
            this.props.updateSelectedAction(name, value);
        }
        this.setState({
            dirty: true
        });
    }

    handleSave = (dirtyfields) => {
        console.log(dirtyfields);
        this.setState({
            dirty: false
        });
    }

    handleDelete = () => {
        //this.props.deletePlayerCharacter('http://localhost:3001/pcs', this.props.character);
        console.log("delete action");
    }

    render() {
        return (
            <BaseForm
                object={this.props.action}
                handleDelete={this.handleDelete}
                handleChange={this.handleChange}
                handleSave={this.handleSave}
            >
                <h3>Action Information</h3>
                <hr />
                <ActionHeader
                    action={this.props.action}
                    hasinputs={true}
                />
                <h3>Source Effects</h3>
                <hr />
                <ActionEffectList
                    all_effects={this.props.effects}
                    effects={this.props.action.source_effects}
                    field="source_effects"
                    hasinputs={true}
                />
                <h3>Target Effects</h3>
                <hr />
                <ActionEffectList
                    all_effects={this.props.effects}
                    effects={this.props.action.target_effects}
                    field="target_effects"
                    hasinputs={true}
                />
                <h3>Failure Source Effects</h3>
                <hr />
                <ActionEffectList
                    all_effects={this.props.effects}
                    effects={this.props.action.fail_source_effects}
                    field="fail_source_effects"
                    hasinputs={true}
                />
                <h3>Failure Target Effects</h3>
                <hr />
                <ActionEffectList
                    all_effects={this.props.effects}
                    effects={this.props.action.fail_target_effects}
                    field="fail_target_effects"
                    hasinputs={true}
                />
            </BaseForm>
        );
    }
}

export default connect(
    mapStateToProps,
    {
        fetchEffects,
        updateSelectedAction
    }
)(ActionForm);
