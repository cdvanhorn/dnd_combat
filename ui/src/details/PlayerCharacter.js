import React from "react";
import { connect } from "react-redux";

import {PlayerCharacterForm} from "../forms/PlayerCharacter.js";
import {fetchClasses} from "../redux/actions/classes.js";
import {fetchRaces} from "../redux/actions/races.js";

const mapStateToProps = state => {
    return {
        "classes": state.classes.items,
        "races": state.races.items
    };
};

class PlayerCharacterDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        //get the player characters to populate the list
        this.props.fetchClasses('http://localhost:3001/classes');
        this.props.fetchRaces('http://localhost:3001/races');
    }

    componentWillUnmount = () => {
        //clear character list?
        console.log("player character details unmount");
    }

    render() {
        console.log("detail render");
        return (
            <div>
                <PlayerCharacterForm 
                    character={this.props.selectedPlayerCharacter}
                    updateCharacter={this.props.updateCharacter}    
                />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    {
        fetchClasses,
        fetchRaces
    }
)(PlayerCharacterDetails);