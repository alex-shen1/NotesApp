import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default class LoginScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalActive: true
        }
    }
    handleClose = () => {
        this.setState({modalActive: false})
    }

    handleLoginButton = () => {
        this.props.handleLogin();
        this.handleClose();
    }

    render() {
        return <div>
            <Modal show={this.state.modalActive && this.props.notLoggedIn}  onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log In</Modal.Title>
                </Modal.Header>
                <Modal.Body> <p>Logging in will let you save your notes inbetween sessions. If you choose to not log in, you'lll still be able to write notes, but they won't be saved.</p></Modal.Body>
                <Modal.Footer>
                <Button variant="success" onClick={this.handleLoginButton}>Log in with Google</Button>
                    <Button variant="secondary" onClick={this.handleClose}>
                        No thanks
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    }
}