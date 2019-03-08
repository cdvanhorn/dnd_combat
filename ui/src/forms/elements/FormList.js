import React from "react";

import Select from "react-select";
import Table from "react-bootstrap/lib/Table";
import Button from "react-bootstrap/lib/Button";

export default class FormList extends React.Component {
    state = {
        selectedOption: null,
    }

    /*
    handleChange = (selectedOption) => {
        this.setState({ selectedOption: null });
        this.props.updateCharacter('actions', {add: true, id: selectedOption.id});
    }

    removeAction = (action_id) => {
        this.setState({ selectedOption: null });
        this.props.updateCharacter('actions', {add: false, id: action_id});
    }

    getOptionValue = (option) => {
        return option.id;
    }

    getOptionLabel = (option) => {
        return option.name;
    }
    */

    render() {
        /*
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
                    <td><Button variant='danger' onClick={this.removeAction.bind(this, action.id)}>Remove</Button></td>
                </tr>
            );
        });
        */
        
        //table of actions option to remove action
        //then select to add new action
        /*
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
        */
        let table_header = <tr>
           <th>Name</th>
           <th></th>
        </tr>
        let object_rows = <tr>
           <th>Bill</th>
           <th>Florida</th>
        </tr>
        return (
            <React.Fragment>
                <Table striped bordered hover size="sm">
                    <thead>
                        {table_header}
                    </thead>
                    <tbody>
                        {object_rows}
                    </tbody>
                </Table>
            </React.Fragment>
        );
    }
}