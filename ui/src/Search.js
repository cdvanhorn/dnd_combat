import React from "react";
import {rdmCap} from "./Utilities.js";

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (value) => {
        this.props.filterList(value);
    }

    render() {
        return (
            <div>
                <Input type='text'
                    label={rdmCap('Search')}
                    icon='search'
                    name='search'
                    value={this.props.filter}
                    onChange={this.handleChange} 
                    disabled={this.props.loading} 
                />
            </div>
        );
    }
}