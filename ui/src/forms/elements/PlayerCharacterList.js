import React from "react";
import { connect } from "react-redux";

import Nav from "react-bootstrap/lib/Nav";

import {rdmCap} from "../../Utilities.js";

import { 
    fetchPlayerCharacters,
    selectPlayerCharacter
} from "../../redux/actions/playerCharacters.js";
import {PlayerCharacter} from "../../models/PlayerCharacter.js";

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

    listClick = (key) => {
        let pc = null
        if(key !== 'create') {
            pc = this.props.player_characters.find(item => {
                return item.id == key;
            });
        } else {
            pc = new PlayerCharacter();
        }
        this.props.selectPlayerCharacter(pc);
    }

    render() {
        //add a create link
        let create_list_item;
        if(this.props.can_edit) {
            create_list_item = (
                <Nav.Link eventKey="create">
                    {rdmCap('create')}
                </Nav.Link>
            );
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
        let loading_text = rdmCap('Loading Characters') + "...";

        let list_content;
        if(this.props.is_fetching) {
            list_content = (
                <Nav.Link disabled>
                    {loading_text}
                </Nav.Link>
            );
        } else {
            list_content = items.map( (item) => {
                return (
                    <Nav.Link className="border" eventKey={item.id} key={item.id}>
                        {item.name}
                    </Nav.Link>
                );
            });
        }

        return (
            <div>
                <Nav
                    variant="pills"
                    className="flex-column"
                    onSelect={this.listClick}
                >
                    {create_list_item}
                    {list_content}
                </Nav>
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