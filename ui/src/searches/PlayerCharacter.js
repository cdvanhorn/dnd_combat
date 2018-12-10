import React from "react";
import { connect } from "react-redux";
import { ListItem } from "react-toolbox/lib/list";

import Search from '../Search.js';
import { 
    fetchPlayerCharacters,
    setPlayerCharacterSearch,
    selectPlayerCharacter,
    CREATE_PLAYER_CHARACTER_ID
} from "../redux/actions/playerCharacters.js";

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
        //this.props.selectPlayerCharacter(CREATE_PLAYER_CHARACTER_ID);
        console.log("create");
    }

    componentDidMount = () => {
        //get the player characters to populate the list
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
                    this.props.player_characters.map( (item) => {
                        return (
                            <ListItem
                                caption={item.name}
                                onClick={(e) => this.props.selectCharacter(item.id, e)}
                                key={item.id}
                                selectabe={true}
                            />
                        );
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
        fetchPlayerCharacters
    }
)(PlayerCharacterSearch);