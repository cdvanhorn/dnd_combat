import React from "react";
import { List, ListItem, ListSubHeader, ListDivider } from "react-toolbox/lib/list";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <List selectable ripple>
                <ListSubHeader caption='ComBAt Menu' />
                <ListItem
                    leftIcon="face"
                    caption="Player Characters"
                    legend="Edit Player Characters"
                    onClick={(e) => this.props.app.setActivePage("Characters", e)}
                />
            </List>
        );
    }
}

export default Navigation;