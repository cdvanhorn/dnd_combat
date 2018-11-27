import React from "react";
import { Layout, Panel, NavDrawer } from "react-toolbox/lib/layout";
import { AppBar } from "react-toolbox/lib/app_bar";

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerActive: false
        };
        this.toggleDrawerActive = this.toggleDrawerActive.bind(this);
    }

    toggleDrawerActive() {
        this.setState(state => ({
            drawerActive: !this.state.drawerActive
        }));
    }

    render() {
        return (
            <Layout>
                <NavDrawer active={this.state.drawerActive}
                    permanentAt='xxl'
                    onOverlayClick={ this.toggleDrawerActive }>
                    <p>
                        Navigation, account switcher, etc. go here.
                    </p>
                </NavDrawer>
                <Panel>
                    <AppBar leftIcon='menu' onLeftIconClick={this.toggleDrawerActive} />
                    <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
                        <h1>Main Content</h1>
                        <p>Main content goes here.</p>
                    </div>
                </Panel>
            </Layout>
        );
    }
}

export default Application;