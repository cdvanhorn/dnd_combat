import React from "react";
import { connect } from "react-redux";

import BaseForm from "./Base.js";

const mapStateToProps = state => {
    return {
        "action": state.actions.ui_selected_action
    };
};

class ActionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.isDisabled = this.isDisabled.bind(this);
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
                <h3>Basics</h3>
                <hr />
                {this.props.action.id}
            </BaseForm>
        );
    }
}

export default connect(
    mapStateToProps,
    {
    }
)(ActionForm);