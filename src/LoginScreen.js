import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default class LoginScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalActive: false
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
            <Modal show={this.state.modalActive ? this.props.notLoggedIn : false}  onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body> <p>Logging in will let you save your notes inbetween sessions.</p>
                <Button variant="success" onClick={this.handleLoginButton}>Log in with Google</Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    }
}