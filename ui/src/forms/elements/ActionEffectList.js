import React from "react";
import FormList from "./FormList.js";

import Effect from "../../models/Effect.js";

export default class ActionEffectList extends React.Component {
    constructor(props) {
        super(props);
    }

    removeRow = (id, field) => {
        console.log("remove row with id " + id + " for field " + field);
    }

    addRow = (id, field) => {
        console.log("add a new row " + id + " to " + field);
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

        //need to provide rows, need to load actual effects
        let effect_objects = this.props.all_effects.filter( (effect) => {
            return this.props.effects.includes(effect.id);
        });
        let effect_rows = effect_objects.map( (effect) => {
            let eobj = new Effect();
            eobj.fromJson(effect)
            return (
                <tr key={eobj.id}>
                    <td>{eobj.name}</td>
                    <td>{eobj.getDescription()}</td>
                </tr>
            );
        });

        return (
            <FormList 
                options={options}
                header={header}
                rows={effect_rows}
                removeRow={this.removeRow}
                addRow={this.addRow}
                field={this.props.field}
            />
        );
    }
}