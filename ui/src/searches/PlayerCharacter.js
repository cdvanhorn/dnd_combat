import React from "react";
import { connect } from "react-redux";
import { ListItem } from "react-toolbox/lib/list";

import Search from '../Search.js';
import { 
    fetchPlayerCharacters,
    setPlayerCharacterSearch,
    selectPlayerCharacter
} from "../redux/actions/pcs.js";

const mapStateToProps = state => {
    return { 
        "player_character_search": state.pcs.ui_player_character_search,
        "player_characters": state.pcs.items,
        "is_fetching": state.pcs.ui_is_fetching
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
            <Search
                filterList={this.filterList}
                filter={this.props.player_character_search}
                create={this.onCreate}
                loading={this.props.is_fetching}
                loadingText = "Loading Characters"
            >
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
    {
        setPlayerCharacterSearch,
        selectPlayerCharacter,
        fetchPlayerCharacters
    }
)(PlayerCharacterSearch);