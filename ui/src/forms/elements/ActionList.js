import React from "react";
import Select from "react-select";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

export default class ActionList extends React.Component {
    state = {
        selectedOption: null,
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }

    render() {
        const { selectedOption } = this.state;

        //table of actions option to remove action
        //then select to add new action
        return (

            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
            />
        );
    }
}