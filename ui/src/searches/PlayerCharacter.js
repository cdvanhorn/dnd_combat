import React from "react";
import { connect } from "react-redux";
import { ListItem } from "react-toolbox/lib/list";

import Search from '../Search.js';
import { setPlayerCharacterSearch, selectPlayerCharacter } from "../redux/actions/ui.js";
import { fetchPlayerCharacters } from "../redux/actions/pcs.js";

const mapStateToProps = state => {
    return { 
        "player_character_search": state.ui.player_character_search,
        "player_characters": state.pcs.items,
        "is_fetching": state.pcs.is_fetching
    };
};

class PlayerCharacterSearch extends React.Component {
    filterList = (e) => {
        this.props.setPlayerCharacterSearch(e);
    }

    onCreate = (e) => {
        this.props.selectPlayerCharacter('create');
    }

    componentDidMount = () => {
        //get the player characters
        this.props.fetchPlayerCharacters('http://localhost:3001/pcs');
    }

    componentWillUnmount = () => {
        //clear character list?
        console.log("character search unmount");
    }

    render() {
        return (
            <Search filterList={this.filterList} filter={this.props.player_character_search} create={this.onCreate}>
                {
                    this.props.player_characters.map( (item, index) => {
                        return (<ListItem caption={item.name} />);
                    })
                }
            </Search>
        );
    }
}

export default connect(
    mapStateToProps,
    { setPlayerCharacterSearch, selectPlayerCharacter, fetchPlayerCharacters }
)(PlayerCharacterSearch);