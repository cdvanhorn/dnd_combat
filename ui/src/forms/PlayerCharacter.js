import React from "react";

import {Avatar} from "react-toolbox/lib/avatar";
import {Button} from "react-toolbox/lib/button";
import {Input} from "react-toolbox/lib/input";
import {Dropdown} from "react-toolbox/lib/dropdown";
import { PlayerCharacter } from "../models/PlayerCharacter";

export class PlayerCharacterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            character: this.props.character
        };
        //Object.assign(this.state.pc_selected, {[field]: value})
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (name, value) => {
        console.log(name + " " + value);
    }

    handleSubmit = (event) => {
        console.log(this.state.character);
        event.preventDefault();
    }

    render() {
        console.log(this.state.character);
        if(!this.state.character.hasOwnProperty('name')) {
            return (<p>Select a Character</p>);
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <Avatar title={this.state.character.name}/>
                <Input
                    type='text'
                    label='Character Name'
                    name='name'
                    value={this.state.character.name}
                    onChange={this.handleChange.bind(this, 'name')}
                />
            </form>
        );
        /*
        return (
            <form onSubmit={this.handleSubmit}>
                <Avatar title={character.name}/>
                <Input
                    type='text'
                    label='Character Name'
                    name='name'
                    value={character.name}
                    onChange={this.handleChange.bind(this, 'name')}
                />
                <Dropdown
                    label="Race"
                    auto
                    source={props.races}
                    value={props.character.race_id}
                    labelKey={"name"}
                    valueKey={"id"}
                />
                <Dropdown
                    label="Class"
                    auto
                    source={props.classes}
                    value={props.character.class_id}
                    labelKey={"name"}
                    valueKey={"id"}
                />
                <Button type='submit' icon='save' label='Save' raised primary />
            </form>
        )
        */
    }
}