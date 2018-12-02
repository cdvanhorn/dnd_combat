import React from "react";
import { Input } from "react-toolbox/lib/input";
import { List, ListItem, ListSubHeader, ListDivider } from "react-toolbox/lib/list";
import { Button } from "react-toolbox/lib/button";

import { connect } from "react-redux";
import { setPlayerCharacterSearch } from "./redux/actions";

const mapStateToProps = state => {
    return { "player_character_search": state.ui.player_character_search };
};

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.filterList = this.filterList.bind(this);
    }

    filterList(e) {
        this.props.setPlayerCharacterSearch(e);
    }

    render() {
        return (
            <div>
                <div>
                    <Input type='text'
                        label='Search'
                        icon='search'
                        name='search'
                        value={this.props.player_character_search}
                        onChange={this.filterList} />
                </div>
                <div>
                    <List selectable ripple>
                        <ListDivider />
                        {/* only add if list editable */}
                        <ListDivider />
                        <ListItem caption='Add Player Character' leftIcon='add_circle' />
                    </List>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    { setPlayerCharacterSearch }
)(Search);
//export default Search;