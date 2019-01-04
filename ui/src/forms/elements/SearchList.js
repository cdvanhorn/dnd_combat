import React from "react";
import Nav from "react-bootstrap/lib/Nav";

import {rdmCap} from "../../Utilities.js";

export default class SearchList extends React.Component {
    constructor(props) {
        super(props);
    }

    listClick = (key) => {
        this.props.itemClick(key);
    }

    render() {
        //add a create link
        let create_list_item;
        if(this.props.canEdit) {
            create_list_item = (
                <Nav.Link eventKey="create">
                    {rdmCap('create')}
                </Nav.Link>
            );
        }

        //filter the list items
        let items = [];
        if(this.props.filter) {
            items = this.props.items.filter(item => {
                return item.name.toLowerCase().includes(this.props.filter.toLowerCase())
            });
        } else {
            items = this.props.items;
        }

        //are we still loading
        let loading_text = rdmCap('Loading') + "...";

        let list_content;
        if(this.props.isFetching) {
            list_content = (
                <Nav.Item as="li">
                    <Nav.Link disabled>
                        {loading_text}
                    </Nav.Link>
                </Nav.Item>
            );
        } else {
            list_content = items.map( (item) => {
                return (
                    <Nav.Item as="li" key={item.id}>
                        <Nav.Link eventKey={item.id} >
                            {item.name}
                        </Nav.Link>
                    </Nav.Item>
                );
            });
        }

        return (
            <div>
                <Nav
                    className="flex-column"
                    onSelect={this.listClick}
                    as="ul"
                >
                    {create_list_item}
                    {list_content}
                </Nav>
            </div>
        );
    }
}