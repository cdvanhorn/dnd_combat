import React from "react";
import { Input } from "react-toolbox/lib/input";
import { List, ListItem, ListDivider } from "react-toolbox/lib/list";

class Search extends React.Component {
    /*constructor(props) {
        super(props);
    }*/

    render() {
        return (
            <div>
                <div>
                    <Input type='text'
                        label='Search'
                        icon='search'
                        name='search'
                        value={this.props.filter}
                        onChange={this.props.filterList} />
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

export default Search;