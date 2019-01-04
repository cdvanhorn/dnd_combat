import React from "react";

import SearchInput from '../forms/elements/SearchInput.js';

export default class Search extends React.Component {
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
            <React.Fragment>
                <SearchInput
                    filterList={this.filterList}
                    filter={this.state.pc_filter}
                    loading={this.props.is_fetching}
                />
                {React.cloneElement(this.props.children, {
                    filter: this.state.pc_filter
                })}
            </React.Fragment>
        );
    }
}