import React from "react";
import { connect } from "react-redux";

import SearchList from "./SearchList.js";
import {
    fetchEffects,
    selectEffect
} from "../../redux/actions/effects.js";
import Effect from "../../models/Effect.js";

const mapStateToProps = state => {
    return { 
        "can_edit": state.ui.can_edit,
        "effects": state.effects.items,
        "is_fetching": state.effects.ui_is_fetching
    };
};

class EffectList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.fetchEffects('http://localhost:3001/effects');
    }

    itemClick = (key) => {
        let eff = null;
        if(key !== 'create') {
            eff = this.props.effects.find(item => {
                return item.id == key;
            });
        } else {
            eff = new Effect();
        }
        this.props.selectEffect(eff);
    }

    render() {
        return (
            <SearchList 
                items={this.props.effects}
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
        fetchEffects,
        selectEffect
    }
)(EffectList);