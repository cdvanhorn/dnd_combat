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

        //need to provide rows

        //have to add callback for 

        return (
            <FormList 
                options={options}
            />
        );
    }
}