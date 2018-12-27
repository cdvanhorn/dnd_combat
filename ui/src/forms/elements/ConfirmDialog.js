import React from "react";

import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";

export default class ConfirmDialog extends React.Component {
    render() {
        return (
            <Modal show={this.props.active}>
                <Modal.Header>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Do you want to {this.props.actionText}?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.toggleDialog}>No</Button>
                    <Button variant="primary" onClick={this.props.onYes}>Yes</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}