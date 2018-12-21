import React from "react";
import {rdmCap} from "./Utilities.js";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <List selectable ripple>
                <ListSubHeader caption={rdmCap('ComBAt Menu')} />
                <ListItem
                    leftIcon="security"
                    caption="Combat Tracker"
                    onClick={(e) => this.props.app.setActivePage("Combat", rdmCap("Combat Tracker"), e)}
                />
                <ListItem
                    leftIcon="group"
                    caption="Encounters"
                    onClick={(e) => this.props.app.setActivePage("Encounters", rdmCap("Encounters"), e)}
                />
                <ListItem
                    leftIcon="memory"
                    caption="Non-Player Characters"
                    onClick={(e) => this.props.app.setActivePage("Npcs", rdmCap("Non-Player Characters"), e)}
                />
                <ListItem
                    leftIcon="face"
                    caption="Player Characters"
                    onClick={(e) => this.props.app.setActivePage("Characters", rdmCap("Player Characters"), e)}
                />
                <ListItem
                    leftIcon="settings"
                    caption="Settings"
                    legend="Settings, Bitch!"
                    onClick={(e) => this.props.app.setActivePage("Settings", rdmCap("Settings"), e)}
                />
            </List>
        );
    }
}

export default Navigation;