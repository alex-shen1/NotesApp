import React, { Component } from 'react';
import './App.css';
import NotesList from "./NotesList.js";
import WriteNotePanel from "./WriteNotePanel.js";
import 'bootstrap/dist/css/bootstrap.min.css'; // uses "darkly" bootswatch theme

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        { title: "Example Title", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", index: 0, timestamp: this.nowTimeString() }
      ],
      activeTitle: "",
      activeText: "",
      editing: false,
      editIndex: 0
    };
  }

  clearNote = () => {
    this.setState({ activeTitle: "" });
    this.setState({ activeText: "" });
  }

  nowTimeString = () => {
    let now = new Date();

    return ("Last edited " + now.getHours() + ":" + now.getMinutes() + " on " +
      (now.getMonth() + 1) + "/" + now.getDate() + "/" + now.getFullYear())
  }
  addNote = () => {
    let note = {
      title: this.state.activeTitle,
      text: this.state.activeText,
      index: this.state.notes.length,
      timestamp: this.nowTimeString()
    }
    this.setState(prevState => {
      return { notes: [...prevState.notes, note] };
    });
    this.clearNote();
    this.setState({ editing: false });
  };

  setEditingNote = (index) => {
    this.setState({
      editing: true,
      editIndex: index,
      activeTitle: this.state.notes[index].title,
      activeText: this.state.notes[index].text
    })
  }

  setActiveTitle = (event) => {
    this.setState({ activeTitle: event.target.value });
  }

  setActiveText = (event) => {
    this.setState({ activeText: event.target.value });
  }

  editNote = () => {
    let edited_notes = this.state.notes;

    edited_notes[this.state.editIndex].title = this.state.activeTitle;
    edited_notes[this.state.editIndex].text = this.state.activeText;
    edited_notes[this.state.editIndex].timestamp = this.nowTimeString();

    this.setState({ notes: edited_notes });
    this.setState({ editing: false })
    this.clearNote();
  }

  deleteNote = (del_index) => {
    let edited_notes = this.state.notes;
    edited_notes.splice(del_index, 1)
    this.setState({ notes: edited_notes });
  }

  render() {
    return (
      <div className="App">
        <WriteNotePanel
          addNote={this.addNote}
          setActiveTitle={this.setActiveTitle}
          setActiveText={this.setActiveText}
          editing={this.state.editing}
          activeTitle={this.state.activeTitle}
          activeText={this.state.activeText}
          editNote={this.editNote}
        />
        <NotesList
          notes={this.state.notes}
          setEditingNote={this.setEditingNote}
          deleteNote={this.deleteNote} />
      </div>
    );
  }
}

export default App;
