import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { "selected_pc_id": state.ui.selected_pc_id };
};

class PlayerCharacterDetails extends React.Component {
    render() {
        return (
            <p>Player Character Details {this.props.selected_pc_id}</p>
        );
    }
}

export default connect(mapStateToProps)(PlayerCharacterDetails);