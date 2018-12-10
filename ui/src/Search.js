import React from "react";
import { Input } from "react-toolbox/lib/input";

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
                    label='Search'
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