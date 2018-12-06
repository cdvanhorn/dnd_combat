import React from "react";
import { connect } from "react-redux";

import {Avatar} from "react-toolbox/lib/avatar";
import {Input} from "react-toolbox/lib/input";

import { CREATE_PLAYER_CHARACTER_ID } from "../redux/actions/pcs.js";

const mapStateToProps = state => {
    return { "selected_pc_id": state.pcs.ui_selected_pc_id };
};

class PlayerCharacterDetails extends React.Component {
    render() {
        let content = <p>Select a Player Character</p>;
        if(this.props.selected_pc_id == CREATE_PLAYER_CHARACTER_ID) {
            content = (
                <div>
                <Avatar title="new" />
                <Input type='text' label='Character Name' name='name' disabled={true}/>
                </div>
            );
        } else {
            //check for valid pc id, display details
            console.log("hola");
        }

        return (
            <div>
                {content}
            </div>
        );
    }
}

export default connect(mapStateToProps)(PlayerCharacterDetails);