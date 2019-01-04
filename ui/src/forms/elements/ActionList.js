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
        this.setState({ selectedOption });
        console.log(selectedOption);
    }

    addCharacter = () => {
        this.setState({
            selectedOption: null
        });
        this.props.updateCharacter('actions', {add: true, id: this.state.selectedOption.id});
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
            <Container>
                <Row>
                    <Col sm={10}>
                        <Select
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={this.props.actions}
                            getOptionLabel={this.getOptionLabel}
                            getOptionValue={this.getOptionValue}
                        />
                    </Col>
                    <Col sm={2}>
                        <Button variant='primary' onClick={this.addCharacter}>Add</Button>
                    </Col>
                </Row>
            </Container>
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