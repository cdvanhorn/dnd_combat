import React from "react";
import { Input } from "react-toolbox/lib/input";
import { List, ListItem, ListDivider } from "react-toolbox/lib/list";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { "can_edit": state.ui.can_edit };
};

class Search extends React.Component {
    render() {
        let create_list_item;
        if(this.props.can_edit) {
            create_list_item = <ListItem caption='Create' leftIcon='add_circle' onClick={this.props.create}/>;
        }

        let list_content;
        if(this.props.loading) {
            list_content = <ListItem caption={this.props.loadingText + '...'} />;
        } else {
            list_content = this.props.children;
        }

        return (
            <div>
                <div>
                    <Input type='text'
                        label='Search'
                        icon='search'
                        name='search'
                        value={this.props.filter}
                        onChange={this.props.filterList} />
                </div>
                <div>
                    <List selectable ripple>
                        <ListDivider />
                        {list_content}
                        <ListDivider />
                        { create_list_item }
                    </List>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Search);