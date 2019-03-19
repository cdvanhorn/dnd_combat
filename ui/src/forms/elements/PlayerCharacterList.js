import React from "react";
import { connect } from "react-redux";

import SearchList from "./SearchList.js";
import { 
    fetchPlayerCharacters,
    selectPlayerCharacter
} from "../../redux/actions/playerCharacters.js";
import {Actor} from "../../models/Actor.js";

const mapStateToProps = state => {
    return { 
        "can_edit": state.ui.can_edit,
        "player_characters": state.pcs.items,
        "is_fetching": state.pcs.ui_is_fetching
    };
};

class PlayerCharacterList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.fetchPlayerCharacters('http://localhost:3001/actors?type=pc');
    }

    itemClick = (key) => {
        let pc = null
        if(key !== 'create') {
            pc = this.props.player_characters.find(item => {
                return item.id == key;
            });
        } else {
            pc = new Actor();
            pc.type = "pc";
        }
        this.props.selectPlayerCharacter(pc);
    }

    render() {
        return (
            <SearchList 
                items={this.props.player_characters}
                itemClick={this.itemClick}
                canEdit={this.props.can_edit}
                isFetching={this.props.is_fetching}
                filter={this.props.filter}
            />
        );
    }
}

export default connect(
    mapStateToProps,
    {
        fetchPlayerCharacters,
        selectPlayerCharacter
    }
)(PlayerCharacterList);
