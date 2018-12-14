import React from "react";
import { connect } from "react-redux";

import {Avatar} from "react-toolbox/lib/avatar";
import {Button} from "react-toolbox/lib/button";
import {Input} from "react-toolbox/lib/input";
import {Dropdown} from "react-toolbox/lib/dropdown";

import {
    updateSelectedPlayerCharacter,
    patchPlayerCharacter,
    postPlayerCharacter,
    deletePlayerCharacter
} from "../redux/actions/playerCharacters.js";

import {fetchClasses} from "../redux/actions/classes.js";
import {fetchRaces} from "../redux/actions/races.js";

const mapStateToProps = state => {
    return {
        "character": state.pcs.ui_selected_character,
        "classes": state.classes.items,
        "races": state.races.items
    };
};

class PlayerCharacterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange = (name, value) => {
        this.props.updateSelectedPlayerCharacter(name, value);

        //update which fields are dirty
        if(this.state[this.props.character.id]) {
            this.setState({
                [this.props.character.id]: Object.assign(this.state[this.props.character.id], {[name]: true})
            })
        } else {
            this.setState({
                [this.props.character.id]: {[name]: true}
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.props.character.id) {
            this.props.patchPlayerCharacter(
                'http://localhost:3001/pcs',
                this.props.character,
                this.state[this.props.character.id]
            );
            //clear the dirty state for this character
            this.setState({
                [this.props.character.id]: {}
            });
        } else {
            //new character
            this.props.postPlayerCharacter('http://localhost:3001/pcs', this.props.character);
        }
    }

    handleDelete = () => {
        this.props.deletePlayerCharacter('http://localhost:3001/pcs', this.props.character);
    }

    componentDidMount = () => {
        //get the player characters to populate the list
        this.props.fetchClasses('http://localhost:3001/classes');
        this.props.fetchRaces('http://localhost:3001/races');
    }

    render() {
        //is something dirty if so activate save button
        let disabled = true;
        if(this.state[this.props.character.id]) {
            disabled = !Object.keys(this.state[this.props.character.id]).length > 0;
        }

        if(!this.props.character.hasOwnProperty('name')) {
            return (<p>Select a Character</p>);
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <Avatar title={this.props.character.name}/>
                <Input
                    type='text'
                    label='Character Name'
                    name='name'
                    value={this.props.character.name}
                    onChange={this.handleChange.bind(this, 'name')}
                />
                <Dropdown
                    label="Race"
                    auto
                    source={this.props.races}
                    value={this.props.character.race_id}
                    labelKey={"name"}
                    valueKey={"id"}
                    onChange={this.handleChange.bind(this, 'race_id')}
                />
                <Dropdown
                    label="Class"
                    auto
                    source={this.props.classes}
                    value={this.props.character.class_id}
                    labelKey={"name"}
                    valueKey={"id"}
                    onChange={this.handleChange.bind(this, 'class_id')}
                />
                <Button type='submit' icon='save' label='Save' raised primary disabled={disabled}/>
                <Button icon='delete' label='Delete' raised accent onClick={this.handleDelete}/>
            </form>
        );
    }
}

export default connect(
    mapStateToProps,
    {
        updateSelectedPlayerCharacter,
        patchPlayerCharacter,
        postPlayerCharacter,
        deletePlayerCharacter,
        fetchClasses,
        fetchRaces
    }
)(PlayerCharacterForm);