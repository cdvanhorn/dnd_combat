import React from "react";
import { connect } from "react-redux";

import Select from "react-select";
import Table from "react-bootstrap/lib/Table";

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
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
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
        console.log(this.props.character.actions);

        //table of actions option to remove action
        let action_rows = [];
        //then select to add new action
        return (
            <React.Fragment>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Source Effects</th>
                        <th>Target Effects</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={this.props.actions}
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