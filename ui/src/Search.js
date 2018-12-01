import React from "react";
import { Input } from "react-toolbox/lib/input";
import { List, ListItem, ListSubHeader, ListDivider } from "react-toolbox/lib/list";
import { Button } from "react-toolbox/lib/button";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            needle: null
        };
        this.filterList = this.filterList.bind(this);
    }

    filterList(e) {
        this.setState({needle: e});
    }

    render() {
        return (
            <div>
                <div>
                    <Input type='text' label='Search' icon='search' name='search' value={this.state.needle} onChange={this.filterList} />
                </div>
                <div>
                    <List selectable ripple>
                        <ListDivider />
                        <ListItem
                            leftIcon="broken_image"
                            caption="Character Name"
                            legend="Race Class Level"
                            rightActions={[<Button primary raised icon='security' label='Add'/>]}
                        />
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