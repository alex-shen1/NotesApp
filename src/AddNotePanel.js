import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class AddNotePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            text: ""
        }

        this.changeTitle = this.changeTitle.bind(this);
        this.changeText = this.changeText.bind(this);
        this.createNote = this.createNote.bind(this);
    }

    changeTitle(event) {
        this.setState({ title: event.target.value })
    }

    changeText(event) {
        this.setState({ text: event.target.value })
    }

    createNote(event) {
        this.setState({title: ""});
        this.setState({text: ""})
        this.props.addNote(this.state.title, this.state.text)
    }

    render() {
        return <div id="addNote">
            <h1> Create Note </h1>
            <Form>
                <Form.Group controlId="createTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="textarea"
                        placeholder="Title"
                        onChange={this.changeTitle}
                        value = {this.state.title} />
                </Form.Group>
                <Form.Group controlId="setText">
                    <Form.Label>Text</Form.Label>
                    <Form.Control as="textarea"
                        rows="1"
                        placeholder="Text"
                        onChange={this.changeText}
                        id="noteText"
                        rows={8}
                        value={this.state.text} />
                </Form.Group>
                <Button variant="primary" onClick={this.createNote}>
                    Create Note
                </Button>
            </Form>
        </div>
    }
}


export default AddNotePanel;