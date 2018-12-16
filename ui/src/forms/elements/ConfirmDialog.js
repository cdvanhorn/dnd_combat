import React from "react";
import {Dialog} from "react-toolbox/lib/dialog";

export default class ConfirmDialog extends React.Component {
    render() {
        let actions = [
            { label: "Cancel", onClick: this.props.toggleDialog },
            { label: "Yes", onClick: this.props.onYes }
        ];

        return (
            <Dialog
                    actions={actions}
                    active={this.props.active}
                    onEscKeyDown={this.props.toggleDialog}
                    onOverlayClick={this.props.toggleDialog}
                    title='Confirmation'
            >
                <p>Are you sure {this.props.actionText}?</p>
            </Dialog>
        );
    }
}