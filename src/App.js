import React, { Component } from 'react';
import './App.css';
import NotesList from "./NotesList.js";
import WriteNotePanel from "./WriteNotePanel.js";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [{ title: "placeholder title", text: "placeholder text" }],
      activeTitle: "",
      activeText: "",
      editing: false
    };
  }

  addNote = () => {
    let note = {
      title: this.state.activeTitle,
      text: this.state.activeText
    }
    this.setState(prevState => {
      return { notes: [...prevState.notes, note] };
    });
    this.setState({ activeTitle: "" });
    this.setState({ activeText: "" });
    this.setState({ editing: false });
  };

  setEditingNote = (note) => {
    this.setState({ editing: true })
    console.log(note);
  }

  setActiveTitle = (event) => {
    this.setState({ activeTitle: event.target.value });
  }

  setActiveText = (event) => {
    this.setState({ activeText: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <WriteNotePanel addNoteFunc={this.addNote}
          origNote={this.state.origNote}
          setActiveTitleFunc={this.setActiveTitle}
          setActiveTextFunc={this.setActiveText}
          editing={this.state.editing}
        />
        <NotesList notes={this.state.notes} setEditingNoteFunc={this.setEditingNote}></NotesList>
      </div>
    );
  }
}

export default App;
