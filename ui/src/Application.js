import React from "react";
import { Layout, Panel, NavDrawer, Sidebar } from "react-toolbox/lib/layout";
import { IconButton } from "react-toolbox/lib/button";
import { AppBar } from "react-toolbox/lib/app_bar";
import Navigation from "./Navigation.js";
import Characters from "./Characters.js";

class Application extends React.Component {
    constructor(props) {
        super(props);
        let defaultPage = "Combat";
        let defaultTitle = "Combat Tracker";
        this.state = {
            drawerActive: false,
            sidebarPinned: false,
            activePage: defaultPage,
            title: defaultTitle,
            defaultPage: defaultPage,
            defaultTitle: defaultTitle
        };
        this.toggleDrawerActive = this.toggleDrawerActive.bind(this);
        this.toggleSidebarPinned = this.toggleSidebarPinned.bind(this);
        this.setActivePage = this.setActivePage.bind(this);
        this.setActivePageHome = this.setActivePageHome.bind(this);
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

    setActivePage(newPage, title) {
        this.setState(state => ({
            activePage: newPage,
            drawerActive: false,
            title: title
        }));
    }

    setActivePageHome() {
        this.setActivePage(this.state.defaultPage, this.state.defaultTitle);
    }

    render() {
        let content;
        if (this.state.activePage == "Characters") {
            content = React.createElement(Characters, {app: this}, null);
        } else {
            content = <h1>Unknown Page, {this.state.activePage}</h1>;
        }
        

        return (
            <Layout>
                <NavDrawer active={this.state.drawerActive}
                    permanentAt='xxl'
                    onOverlayClick={ this.toggleDrawerActive }>
                    <Navigation app={this}/>
                </NavDrawer>
                <Panel>
                    <AppBar leftIcon='menu' onLeftIconClick={this.toggleDrawerActive} title={this.state.title}/>
                    <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem', flexDirection: 'row'}}>
                        {content}
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