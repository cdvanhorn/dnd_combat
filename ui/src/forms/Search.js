import React from "react";

import SearchInput from '../forms/elements/SearchInput.js';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: ""
        };
    }

    filterList = (e) => {
        this.setState({
            filter: e
        });
    }
    
    render() {
        return (
            <React.Fragment>
                <SearchInput
                    filterList={this.filterList}
                    filter={this.state.filter}
                />
                {React.cloneElement(this.props.children, {
                    filter: this.state.filter
                })}
            </React.Fragment>
        );
    }
}