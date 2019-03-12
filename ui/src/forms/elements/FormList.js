import React from "react";

import Select from "react-select";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default class FormList extends React.Component {
    state = {
        selectedOption: null
    }

    handleChange = (selectedOption) => {
        this.setState({
            selectedOption: null
        });
        this.props.addRow(selectedOption.id, this.props.field);
    }

    removeRow = (id) => {
        this.setState({ selectedOption: null });
        this.props.removeRow(id, this.props.field);
    }

    getOptionValue = (option) => {
        return option.id;
    }

    getOptionLabel = (option) => {
        return option.name;
    }

    render() {
        const { selectedOption } = this.state;

        //iterate list of rows add delete button to the row
        let new_rows = React.Children.map(this.props.rows, (row) => {
            //need to clone this row with an additional child
            let delete_button = React.createElement(Button, {
                "variant": "danger",
                "onClick": this.removeRow.bind(this, row.key)
            }, "Remove");
            let extra_column = React.createElement("td", {"key": row.key + "remove"}, delete_button);
            return React.cloneElement(row, row.props, [
                ...row.props.children,
                extra_column
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
