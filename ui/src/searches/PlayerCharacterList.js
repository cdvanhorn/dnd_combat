import React from "react";
import { List, ListItem, ListDivider } from "react-toolbox/lib/list";
import { connect } from "react-redux";
import {rdmCap} from "../Utilities.js";

import { 
    fetchPlayerCharacters,
    selectPlayerCharacter
} from "../redux/actions/playerCharacters.js";
import {PlayerCharacter} from "../models/PlayerCharacter.js";

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
        //get the player characters to populate the list
        this.props.fetchPlayerCharacters('http://localhost:3001/pcs');
    }

    onCreate = (e) => {
        this.props.selectPlayerCharacter(new PlayerCharacter());
    }

    listClick = (character) => {
        let pc = new PlayerCharacter();
        pc.fromJson(character);
        this.props.selectPlayerCharacter(pc);
    }

    render() {
        //add a create link
        let create_list_item;
        if(this.props.can_edit) {
            create_list_item = <ListItem caption={rdmCap('Create')} leftIcon='add_circle' onClick={this.onCreate}/>;
        }

        //filter the list items
        let items = [];
        if(this.props.filter) {
            items = this.props.player_characters.filter(item => {
                return item.name.toLowerCase().includes(this.props.filter.toLowerCase())
            });
        } else {
            items = this.props.player_characters;
        }

        //are we still loading
        let loading_text = rdmCap('Loading Characters');

        let list_content;
        if(this.props.is_fetching) {
            list_content = <ListItem caption={loading_text + '...'} leftIcon='cloud_download' disabled={true}/>;
        } else {
            list_content = items.map( (item) => {
                return (
                    <ListItem
                        caption={item.name}
                        onClick={this.listClick.bind(this, item)}
                        key={item.id}
                        selectabe={true}
                    />
                );
            });
        }

        return (
            <div>
                <div>
                    <List selectable ripple>
                        <ListDivider />
                        { create_list_item }
                        <ListDivider />
                        {list_content}
                    </List>
                </div>
            </div>
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