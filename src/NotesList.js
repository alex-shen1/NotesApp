import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const NotesList = ({ notes, setEditingNote, deleteNote }) => {
    return <div id="notesList">
        <h1>Your Notes</h1>
        <div>
            {
                notes.map( (note, index) => {
                    if (note != null) {
                        return (
                            <Card>
                                <Card.Body>
                                    <Card.Title>{note.title}
                                        <div id="buttons">
                                            <Button
                                                variant="light"
                                                onClick={() => setEditingNote(index)}>
                                                Edit
                                    </Button>
                                            <Button
                                                variant="danger"
                                                onClick={() => deleteNote(index)}>
                                                Delete
                                    </Button>
                                        </div>
                                    </Card.Title>

                                    <Card.Subtitle id="timestamp">{note.timestamp}</Card.Subtitle>

                                    <Card.Text>{note.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    }
                })
            }
        </div>
    </div>
}

export default NotesList;
