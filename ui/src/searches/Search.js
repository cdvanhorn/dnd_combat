import React from "react";

import Form from "react-bootstrap/lib/Form";
import Col from "react-bootstrap/lib/Col";

import {rdmCap} from "../Utilities.js";

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.props.filterList(event.target.value);
    }

    render() {
        return (
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridSearch">
                        <Form.Label>Search</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={rdmCap("search")}
                            value={this.props.filter}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                </Form.Row>
            </Form>
        );
    }
}