import React, { Component } from "react";
import Card from "react-bootstrap/Card"
class NotesList extends Component{
    render(){
        return <div id="notesList">
            <h1>Your Notes</h1>
            <div>
                {this.props.notes.map(note => {
                    return(
                        <Card >
                            <Card.Body>
                                <Card.Title>{note.title}</Card.Title>
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