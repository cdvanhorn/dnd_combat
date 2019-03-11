import React from "react";

import Select from "react-select";
import Table from "react-bootstrap/lib/Table";
import Button from "react-bootstrap/lib/Button";

export default class FormList extends React.Component {
    state = {
        selectedOption: null,
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption: selectedOption});
        //this.setState({ selectedOption: null });
        //this.props.updateCharacter('actions', {add: true, id: selectedOption.id});
    }

    /*
    removeAction = (action_id) => {
        this.setState({ selectedOption: null });
        this.props.updateCharacter('actions', {add: false, id: action_id});
    }
    */

    getOptionValue = (option) => {
        return option.id;
    }

    getOptionLabel = (option) => {
        return option.name;
    }

    render() {
        const { selectedOption } = this.state;

        //iterate list of rows
        let new_rows = React.Children.map(this.props.rows, (row) => {
            //need to clone this row with an additional child
            let extra_row = React.createElement("td", {"key": "fred"}, "australia");
            return React.cloneElement(row, row.props, [
                ...row.props.children,
                extra_row
            ]);
        });

        return (
            <React.Fragment>
                <Table striped bordered hover size="sm">
                    <thead>
                        {this.props.header}
                    </thead>
                    <tbody>
                        {new_rows}
                    </tbody>
                </Table>
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={this.props.options}
                    getOptionLabel={this.getOptionLabel}
                    getOptionValue={this.getOptionValue}
                />
                <br />
            </React.Fragment>
        );
    }
}