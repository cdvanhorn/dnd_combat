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
                    leftIcon="security"
                    caption="Combat Tracker"
                    onClick={(e) => this.props.app.setActivePage("Combat", "Combat Tracker", e)}
                />
                <ListItem
                    leftIcon="group"
                    caption="Encounters"
                    onClick={(e) => this.props.app.setActivePage("Encounters", "Encounters", e)}
                />
                <ListItem
                    leftIcon="memory"
                    caption="Non-Player Characters"
                    onClick={(e) => this.props.app.setActivePage("Npcs", "Non-Player Characters", e)}
                />
                <ListItem
                    leftIcon="face"
                    caption="Player Characters"
                    onClick={(e) => this.props.app.setActivePage("Characters", "Player Characters", e)}
                />
                <ListItem
                    leftIcon="settings"
                    caption="Settings"
                    legend="Settings, Bitch!"
                    onClick={(e) => this.props.app.setActivePage("Settings", "Settings", e)}
                />
            </List>
        );
    }
}

export default Navigation;