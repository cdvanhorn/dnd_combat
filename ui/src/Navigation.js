import React from "react";
import { List, ListItem, ListSubHeader, ListDivider } from "react-toolbox/lib/list";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <List selectable ripple>
                <ListSubHeader caption='CoMBAt Menu' />
                <ListItem
                    leftIcon="face"
                    caption="Player Characters"
                    legend="Edit Player Characters"
                    onClick={this.props.app.toggleSidebarPinned}
                />
            </List>
        );
    }
}

export default Navigation;