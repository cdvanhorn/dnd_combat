import React from "react";
import { connect } from "react-redux";

import Search from '../Search.js';
import { setPlayerCharacterSearch } from "../redux/actions";

const mapStateToProps = state => {
    return { "player_character_search": state.ui.player_character_search };
};

class PlayerCharacterSearch extends React.Component {
    filterList = (e) => {
        this.props.setPlayerCharacterSearch(e);
    }

    render() {
        return (
            <Search 
                filterList={this.filterList}
                filter={this.props.player_character_search}/>
        );
    }
}

export default connect(
    mapStateToProps,
    { setPlayerCharacterSearch }
)(PlayerCharacterSearch);