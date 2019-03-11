import React from "react";
import { connect } from "react-redux";
import FormList from "./FormList.js";

export default class ActionEffectList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //need to provide options
        let options = this.props.all_effects.filter( (effect) => {
            return !this.props.effects.includes(effect.id);
        });

        //need to provide headers
        let header = <tr>
           <th>Name</th>
           <th>Description</th>
           <th></th>
        </tr>

        //<td><Button variant='danger' onClick={this.removeAction.bind(this, effect.id)}>Remove</Button></td>
        //need to provide rows, need to load actual effects
        let effect_objects = this.props.all_effects.filter( (effect) => {
            return this.props.effects.includes(effect.id);
        });
        let effect_rows = effect_objects.map( (effect) => {
            return (
                <tr key={effect.id}>
                    <td>{effect.name}</td>
                    <td>Banana</td>
                </tr>
            );
        });

        //have to add callback for selecting someting and removing something

        return (
            <FormList 
                options={options}
                header={header}
                rows={effect_rows}
            />
        );
    }
}