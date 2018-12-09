import React from "react";

import {Avatar} from "react-toolbox/lib/avatar";
import {Input} from "react-toolbox/lib/input";
import {Dropdown} from "react-toolbox/lib/dropdown";

export class PlayerCharacterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            character: {
                name: "Banana"
            }
        };
    }

    render() {
        let character = this.state.character;
        return (
            <form>
                <Avatar title={character.name} />
                <Input type='text' label='Character Name' name='name' value={character.name}/>
                {/*
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
                */}
            </form>
        )
    }
}