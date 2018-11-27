import React from "react";
import { Layout, Panel } from "react-toolbox/lib/layout";
import { AppBar } from "react-toolbox/lib/app_bar";

class Application extends React.Component {
    render() {
        return (
            <Layout>
                <Panel>
                    <AppBar leftIcon='menu' />
                    <div>
                        <h1>Main Content</h1>
                        <p>Main content goes here.</p>
                    </div>
                </Panel>
            </Layout>
        );
    }
}

export default Application;