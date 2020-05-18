import React, { Component } from 'react';
import './App.css';
import NotesList from "./NotesList.js";
import WriteNotePanel from "./WriteNotePanel.js";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [{ title: "placeholder title", text: "placeholder text", index: 0 }],
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
  addNote = () => {
    let note = {
      title: this.state.activeTitle,
      text: this.state.activeText,
      index: this.state.notes.length
    }
    this.setState(prevState => {
      return { notes: [...prevState.notes, note] };
    });
    this.clearNote();
    this.setState({ editing: false });
  };

  setEditingNote = (index) => {
    this.setState({ editing: true })
    this.setState({ editIndex: index })
    this.setState({ activeTitle: this.state.notes[index].title })
    this.setState({ activeText: this.state.notes[index].text })
  }

  setActiveTitle = (event) => {
    this.setState({ activeTitle: event.target.value });
  }

  setActiveText = (event) => {
    this.setState({ activeText: event.target.value });
  }

  editNote = () => {
    console.log("editing note")
    let new_notes = this.state.notes;

    new_notes[this.state.editIndex].title = this.state.activeTitle;
    new_notes[this.state.editIndex].text = this.state.activeText;

    this.setState({notes: new_notes});
    this.setState({editing: false})
    this.clearNote();
  }

  render() {
    return (
      <div className="App">
        <WriteNotePanel
          addNoteFunc={this.addNote}
          setActiveTitleFunc={this.setActiveTitle}
          setActiveTextFunc={this.setActiveText}
          editing={this.state.editing}
          activeTitle={this.state.activeTitle}
          activeText={this.state.activeText}
          editNoteFunc={this.editNote}
        />
        <NotesList notes={this.state.notes}
          setEditingNoteFunc={this.setEditingNote}></NotesList>
      </div>
    );
  }
}

export default App;
