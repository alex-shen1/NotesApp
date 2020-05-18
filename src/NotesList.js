import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

/*This would be a great place to use a functional component for when we don't manage state within a component.
I would write this like the following:
const NotesList = ({deleteNoteFunc, setEditingNoteFunc, etc.}) => {
    return ()
    
  }
  
  change settings to auto format on save
  
  On naming conventions: don't need to note that a variable is a function or a list or a string. 
  i.e. you can remove "Func" from your function names here
    
    */
class NotesList extends Component {
    render() {
        return <div id="notesList">
            <h1>Your Notes</h1>
            <div>
                {
                    this.props.notes.map(note => {
                        return (
                            <Card>
                                <Card.Body>
                                    <Card.Title>{note.title}
                                        <div id="buttons">
                                        <Button
                                            variant="light"
                                            onClick={() => this.props.setEditingNoteFunc(note.index)}>
                                            Edit
                                        </Button>
                                        <Button
                                            variant="danger"
                                            onClick={() => this.props.deleteNoteFunc(note.index)}>
                                            Delete
                                        </Button>
                                        </div>
                                    </Card.Title>

                                    <Card.Subtitle id="timestamp">{note.timestamp}</Card.Subtitle>

                                    <Card.Text>{note.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    }
}

export default NotesList;
