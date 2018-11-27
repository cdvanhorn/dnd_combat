import React from "react";
import { Layout, Panel, NavDrawer, Sidebar } from "react-toolbox/lib/layout";
import { IconButton } from "react-toolbox/lib/button";
import { AppBar } from "react-toolbox/lib/app_bar";
import Navigation from "./Navigation.js";

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerActive: false,
            sidebarPinned: false
        };
        this.toggleDrawerActive = this.toggleDrawerActive.bind(this);
        this.toggleSidebarPinned = this.toggleSidebarPinned.bind(this);
    }

    toggleDrawerActive() {
        this.setState(state => ({
            drawerActive: !this.state.drawerActive
        }));
    }

    openSidebar() {
        this.setState(state => ({
            sidebarPinned: true
        }));
    }

    closeSidebar() {
        this.setState(state => ({
            sidebarPinned: false
        }));
    }

    toggleSidebarPinned() {
        this.setState(state => ({
            sidebarPinned: !this.state.sidebarPinned
        }));
    }

    render() {
        return (
            <Layout>
                <NavDrawer active={this.state.drawerActive}
                    permanentAt='xxl'
                    onOverlayClick={ this.toggleDrawerActive }>
                    <Navigation app={this}/>
                </NavDrawer>
                <Panel>
                    <AppBar leftIcon='menu' onLeftIconClick={this.toggleDrawerActive} />
                    <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
                        <h1>Main Content</h1>
                        <p>Main content goes here.</p>
                    </div>
                </Panel>
                <Sidebar pinned={ this.state.sidebarPinned } width={ 5 }>
                    <div><IconButton icon='close' onClick={ this.toggleSidebarPinned }/></div>
                    <div style={{ flex: 1 }}>
                        <p>Supplemental content goes here.</p>
                    </div>
                </Sidebar>
            </Layout>
        );
    }
}

export default Application;