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
        { title: "Example Title", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", index: 0, timestamp: this.nowTimeString()}
      ],
      activeTitle: "",
      activeText: "",
      editing: false,
      editIndex: 0
    };
  }

  //Good use of arrow functions to avoid having to use bind this
  clearNote = () => {
    this.setState({ activeTitle: "" });
    this.setState({ activeText: "" });
  }

  nowTimeString = () => {
    let now = new Date();

    return ("Last edited " + now.getHours() + ":" + now.getMinutes() + " on " +
    (now.getMonth()+1) + "/" + now.getDate() + "/" + now.getFullYear())
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
    /*
    You can group items in setState together to improve readability like:
    this.setState({editing:true, editIndex: index, activeTitle:...})
    */
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
    //instead of new notes, can you think of a better variable that gives an idea of what is / will be happening to
    //this variable? something with editing, updating, etc.
    let new_notes = this.state.notes;

    new_notes[this.state.editIndex].title = this.state.activeTitle;
    new_notes[this.state.editIndex].text = this.state.activeText;
    new_notes[this.state.editIndex].timestamp = this.nowTimeString();

    this.setState({notes: new_notes});
    this.setState({editing: false})
    this.clearNote();
  }

  deleteNote = (del_index) => {
    let new_notes = this.state.notes; 
    new_notes.splice(del_index, 1)
    this.setState({notes: new_notes});
  }

  render() {
    return (
      <div className="App">
      {/*Good use of components here to split logic*/}
        <WriteNotePanel
          addNoteFunc={this.addNote}
          setActiveTitleFunc={this.setActiveTitle}
          setActiveTextFunc={this.setActiveText}
          editing={this.state.editing}
          activeTitle={this.state.activeTitle}
          activeText={this.state.activeText}
          editNoteFunc={this.editNote}
        />
        <NotesList 
          notes={this.state.notes}
          setEditingNoteFunc={this.setEditingNote} 
          deleteNoteFunc={this.deleteNote} />
      </div>
    );
  }
}

export default App;
