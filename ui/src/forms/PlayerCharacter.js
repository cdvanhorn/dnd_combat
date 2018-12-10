import React from "react";

import {Avatar} from "react-toolbox/lib/avatar";
import {Button} from "react-toolbox/lib/button";
import {Input} from "react-toolbox/lib/input";
import {Dropdown} from "react-toolbox/lib/dropdown";

export class PlayerCharacterForm extends React.Component {
    handleChange = (name, value) => {
        this.setState({
            character: Object.assign(this.state.character, {[name]: value})
        });
    }

    handleSubmit = (event) => {
        console.log(this.state.character);
        event.preventDefault();
    }

    render() {
        let character = this.props.character;
        return (
            <div>
                <p>{character.name}</p>
            </div>
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