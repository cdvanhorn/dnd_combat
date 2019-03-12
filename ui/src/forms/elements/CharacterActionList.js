import React from "react";
import { connect } from "react-redux";

import FormList from "./FormList.js";

import {fetchActions} from "../../redux/actions/actions.js";

const mapStateToProps = state => {
    return {
        "actions": state.actions.items
    };
};

class CharacterActionList extends React.Component {
    state = {
        action: null
    }

    addRow = (id) => {
        this.setState({
            action: "add" + id
        });
        this.props.updateCharacter('actions', {add: true, id: id});
    }

    removeRow = (id) => {
        this.setState({
            action: "remove" + id
        });
        this.props.updateCharacter('actions', {add: false, id: id});
    }

    componentDidMount = () => {
        //get the player characters to populate the list
        this.props.fetchActions('http://localhost:3001/actions');
    }

    render() {
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
                </tr>
            );
        });

        let header = <tr>
           <th>Name</th>
           <th>Source Effects</th>
           <th>Target Effects</th>
           <th></th>
        </tr>
        
        //table of actions option to remove action
        //then select to add new action
        return (
            <FormList 
                options={options}
                header={header}
                rows={action_rows}
                removeRow={this.removeRow}
                addRow={this.addRow}
                field="actions"
            />
        );
    }
}

export default connect(
    mapStateToProps,
    {
        fetchActions
    }
)(CharacterActionList);