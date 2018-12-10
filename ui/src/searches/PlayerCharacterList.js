import React from "react";
import { List, ListItem, ListDivider } from "react-toolbox/lib/list";
import { connect } from "react-redux";

import { 
    fetchPlayerCharacters
} from "../redux/actions/playerCharacters.js";

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
        console.log("fetching players");
        this.props.fetchPlayerCharacters('http://localhost:3001/pcs');
    }

    render() {
        //add a create link
        let create_list_item;
        if(this.props.can_edit) {
            create_list_item = <ListItem caption='Create' leftIcon='add_circle' onClick={this.props.create}/>;
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
        let loading_text = 'Loading Characters';

        let list_content;
        if(this.props.is_fetching) {
            list_content = <ListItem caption={loading_text + '...'} leftIcon='cloud_download' disabled={true}/>;
        } else {
            list_content = items.map( (item) => {
                return (
                    <ListItem
                        caption={item.name}
                        onClick={this.props.listClick.bind(this, item)}
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
                        {list_content}
                        <ListDivider />
                        { create_list_item }
                    </List>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    {
        fetchPlayerCharacters
    }
)(PlayerCharacterList);