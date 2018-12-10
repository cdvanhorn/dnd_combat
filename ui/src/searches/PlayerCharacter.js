import React from "react";
import { connect } from "react-redux";
import { ListItem } from "react-toolbox/lib/list";

import Search from '../Search.js';
import { 
    fetchPlayerCharacters
} from "../redux/actions/playerCharacters.js";

import {PlayerCharacter} from "../models/PlayerCharacter.js";

const mapStateToProps = state => {
    return { 
        "player_characters": state.pcs.items,
        "is_fetching": state.pcs.ui_is_fetching
    };
};

class PlayerCharacterSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pc_filter: ""
        };
    }

    filterList = (e) => {
        this.setState({
            pc_filter: e
        });
        this.props.fetchPlayerCharacters('http://localhost:3001/pcs?q=' + e);
    }

    onCreate = (e) => {
        this.props.selectCharacter(new PlayerCharacter());
    }

    handleClick = (character, e) => {
        let pc = new PlayerCharacter();
        pc.fromJson(character);
        this.props.selectCharacter(pc);
    }

    componentDidMount = () => {
        //get the player characters to populate the list
        if(this.state.pc_filter) {
            this.props.fetchPlayerCharacters('http://localhost:3001/pcs?q=' + this.state.pc_filter);
        } else {
            this.props.fetchPlayerCharacters('http://localhost:3001/pcs');
        }
    }

    componentWillUnmount = () => {
        //clear character list?
        console.log("character search unmount");
    }

    render() {
        return (
            <Search
                filterList={this.filterList}
                filter={this.state.pc_filter}
                create={this.onCreate}
                loading={this.props.is_fetching}
                loadingText = "Loading Characters"
            >
                {
                    this.props.player_characters.map( (item) => {
                        return (
                            <ListItem
                                caption={item.name}
                                onClick={this.handleClick.bind(this, item)}
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
        fetchPlayerCharacters
    }
)(PlayerCharacterSearch);