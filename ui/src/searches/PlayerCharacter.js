import React from "react";
import { connect } from "react-redux";

import Search from '../Search.js';
import PlayerCharacterList from "../searches/PlayerCharacterList.js";

const mapStateToProps = state => {
    return {
        "is_fetching": state.pcs.ui_is_fetching
    };
};

class PlayerCharacterSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pc_filter: ""
        };
    }

    filterList = (e) => {
        this.setState({
            pc_filter: e
        });
    }
    
    render() {
        return (
            <div>
                <Search
                    filterList={this.filterList}
                    filter={this.state.pc_filter}
                    loading={this.props.is_fetching}
                />
                <PlayerCharacterList
                    filter={this.state.pc_filter}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps)(PlayerCharacterSearch);