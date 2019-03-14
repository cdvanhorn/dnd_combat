import React from "react";

import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

import ConfirmDialog from "./elements/ConfirmDialog.js";

import {rdmCap} from "../Utilities";

export default class BaseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.toggleDialog = this.toggleDialog.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.isSaveDisabled = this.isSaveDisabled.bind(this);
    }

    handleChange = (name, event) => {
        //update which fields are dirty
        if(this.state[this.props.object.id]) {
            this.setState({
                [this.props.object.id]: Object.assign(this.state[this.props.object.id], {[name]: true})
            })
        } else {
            this.setState({
                [this.props.object.id]: {[name]: true}
            })
        }

        this.props.handleChange(name, event);
    }

    handleSave = (event) => {
        event.preventDefault();
        //need to pass dirty fields to save handler
        let dirtyfields = this.state[this.props.object.id];
        this.props.handleSave(dirtyfields);
        //clear state
        this.setState({
            [this.props.object.id]: {}
        });
    }

    toggleDialog = () => {
        //open/close the confirmation dialog
        this.setState({
            active: !this.state.active
        });
    }

    handleDelete = () => {
        //what to do if confirm delete
        this.toggleDialog();
        this.props.handleDelete();
    }

    isSaveDisabled = () => {
        if(this.state[this.props.object.id]) {
            return !Object.keys(this.state[this.props.object.id]).length > 0;
        } else {
            return true;
        }
    }

    render() {
        if(!this.props.object.hasOwnProperty('name')) {
            return (<p>{rdmCap('Select Something Asshole')}!</p>);
        }

        let content = React.Children.map(this.props.children, (child) => {
            if('hasinputs' in child.props) {
                return React.cloneElement(child, {
                    ...child.props,
                    handleChange: this.handleChange
                }, child.children);
            } else {
                return child;
            }
        });

        let action_text = "delete " + this.props.object.name;
        return (
            <React.Fragment>
                <ConfirmDialog
                    actionText={action_text}
                    onYes={this.handleDelete}
                    toggleDialog={this.toggleDialog}
                    active={this.state.active}
                />
                <form onSubmit={this.handleSave}>
                    {content}
                    <br />
                    <ButtonToolbar className="justify-content-end">
                        <Button type='submit' variant='primary' disabled={this.isSaveDisabled()}>Save</Button>
                        <Button variant='danger' onClick={this.toggleDialog}>Delete</Button>
                    </ButtonToolbar>
                </form>
            </React.Fragment>
        );
    }
}
