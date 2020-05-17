import React, { Component } from 'react';
import './App.css';
import NotesList from "./NotesList.js";
import AddNotePanel from "./AddNotePanel.js";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: []
    };
  }

  addNote = (new_title, new_text) => {
    let note = {
      title: new_title,
      text: new_text
    }
    this.setState(prevState => {
      return { notes: [...prevState.notes, note]};
    });
  };

  render() {
    return (
      <div className="App">
        <AddNotePanel addNote={this.addNote}/>
        <NotesList notes={this.state.notes}></NotesList>
      </div>
    );
  }
}

export default App;
