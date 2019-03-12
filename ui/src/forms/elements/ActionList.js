import React from "react";
import { connect } from "react-redux";

import SearchList from "./SearchList.js";
import {
    fetchActions,
    selectAction
} from "../../redux/actions/actions.js";
import Action from "../../models/Action.js";

const mapStateToProps = state => {
    return { 
        "can_edit": state.ui.can_edit,
        "actions": state.actions.items,
        "is_fetching": state.actions.ui_is_fetching
    };
};

class ActionList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.fetchActions('http://localhost:3001/actions');
    }

    itemClick = (key) => {
        let act = null;
        if(key !== 'create') {
            act = this.props.actions.find(item => {
                return item.id == key;
            });
        } else {
            act = new Action();
        }
        this.props.selectAction(act);
    }

    render() {
        return (
            <SearchList 
                items={this.props.actions}
                itemClick={this.itemClick}
                canEdit={this.props.can_edit}
                isFetching={this.props.is_fetching}
                filter={this.props.filter}
            />
        );
    }
}

export default connect(
    mapStateToProps,
    {
        fetchActions,
        selectAction
    }
)(ActionList);
