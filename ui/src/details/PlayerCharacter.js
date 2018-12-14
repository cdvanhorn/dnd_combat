import React from "react";
import { connect } from "react-redux";

import PlayerCharacterForm from "../forms/PlayerCharacter.js";


const mapStateToProps = state => {
    return {};
};

class PlayerCharacterDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount = () => {
        //clear character list?
        console.log("player character details unmount");
    }

    render() {
        return (
            <div>
                <PlayerCharacterForm />
            </div>
        );
    }
}

export default connect(
    mapStateToProps
)(PlayerCharacterDetails);