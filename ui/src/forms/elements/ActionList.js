import React from "react";
import { connect } from "react-redux";

import Select from "react-select";
import Table from "react-bootstrap/lib/Table";
import Button from "react-bootstrap/lib/Button";
import Container from "react-bootstrap/lib/Container";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

import {fetchActions} from "../../redux/actions/actions.js";

const mapStateToProps = state => {
    return {
        "actions": state.actions.items
    };
};

class ActionList extends React.Component {
    state = {
        selectedOption: null,
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption: null });
        this.props.updateCharacter('actions', {add: true, id: selectedOption.id});
    }

    componentDidMount = () => {
        //get the player characters to populate the list
        this.props.fetchActions('http://localhost:3001/actions');
    }

    getOptionValue = (option) => {
        return option.id;
    }

    getOptionLabel = (option) => {
        return option.name;
    }

    render() {
        const { selectedOption } = this.state;

        //filter out actions the pc can already do
        let options = this.props.actions.filter( (action) => {
            return !this.props.character.actions.includes(action.id);
        });

        //filter the major list of actions to just actions pc has
        let pc_actions = this.props.actions.filter( (action) => {
            return this.props.character.actions.includes(action.id);
        });
        let action_rows = pc_actions.map( (action) => {
            return (
                <tr key={action.id}>
                    <td>{action.name}</td>
                    <td>{action.source_effects}</td>
                    <td>{action.target_effects}</td>
                    <td><Button variant='danger'>Remove</Button></td>
                </tr>
            );
        });
        
        //table of actions option to remove action
        //then select to add new action
        return (
            <React.Fragment>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Source Effects</th>
                        <th>Target Effects</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {action_rows}
                </tbody>
            </Table>
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
                getOptionLabel={this.getOptionLabel}
                getOptionValue={this.getOptionValue}
            />
            </React.Fragment>
        );
    }
}

export default connect(
    mapStateToProps,
    {
        fetchActions
    }
)(ActionList);