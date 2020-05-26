import React, { Component } from 'react';

import NotesList from "./NotesList.js";
import WriteNotePanel from "./WriteNotePanel.js";
import LoginScreen from "./LoginScreen"

import Button from "react-bootstrap/Button";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // uses "darkly" bootswatch theme


import firebase from "./firebase.js"
// import firebaseConfig from "./firebase"
// // import firebase as firebase_ from "firebase";


// import * as firebase from 'firebase/app';
// import 'firebase/auth';
import withFirebaseAuth from 'react-with-firebase-auth';
import { providers, firebaseAppAuth } from "./firebase"
// import firebaseConfig from './firebaseConfig';

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const firebaseAppAuth = firebaseApp.auth();
// const providers = {
//   googleProvider: new firebase.auth.GoogleAuthProvider(),
// };

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
      editIndex: 0,
      activeUser: this.props.user != null ? this.props.user.email : "default",
      firebase_ref: firebase.database().ref("default")
    };
    this.loadUserData();
    // console.log(firebase)
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
    let updated_notes = [...this.state.notes, note]
    this.setState(prevState => {
      return { notes: updated_notes };
    });
    this.clearNote();
    this.setState({ editing: false });

    // console.log(this.state.firebase_ref)
    this.state.firebase_ref.set(updated_notes);
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

    this.state.firebase_ref.set(edited_notes);
  }

  deleteNote = (del_index) => {
    let edited_notes = this.state.notes;
    edited_notes.splice(del_index, 1)
    this.setState({ notes: edited_notes });

    this.state.firebase_ref.child(del_index).remove();
  }

  loadUserData = () => {
    if (this.props.user != null) {
      console.log("user logged in")
      let uid = this.props.user.uid;
      console.log("loading in data from " + uid);
      let new_DB_ref = firebase.database().ref(uid + "/notes/");
      // need to create local var because accessing state to get the
      // DB reference might be too slow for loading in user notes
      this.setState({
        activeUser: uid,
        firebase_ref: new_DB_ref
      })

      new_DB_ref.once("value", snapshot => {
        if (snapshot && snapshot.exists()) {
          let user_notes = snapshot.val();
          this.setState({ notes: user_notes })
        }
      })
    }
  }

  test = () => {
    console.log(this.state.activeUser);
    console.log(this.props.user.email);
  }

  // loads in data automatically when opening app
  componentDidUpdate(prevProps) {
    if (this.props.user != prevProps.user) {
      if (this.props.user != null) {
        this.loadUserData();
      }
    }
  }

  handleLogin = () => {
    this.props.signInWithGoogle();
    this.loadUserData();
  }
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    return (
      <div className="App">
        {/* {console.log(this.props.user)} */}
        {/* {this.loadUserData} */}
        <LoginScreen
          handleLogin={this.handleLogin} />
        {/* <button onClick={signInWithGoogle}>login</button>
        <button onClick={signOut}>sign out</button>
        <button onClick={this.test}>print active user</button> */}
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
        <div className="login">
          <p id="userinfo">{this.props.user != null ? "Logged in as " + this.props.user.email :
          "Not logged in"}</p>
          <br />
          <Button variant="success"
            onClick={this.handleLogin} >Log in with Google</Button>
          <Button variant="warning" onClick={this.props.signOut}>Sign out</Button>
        </div>
      </div>
    );
  }
}

// export default App;

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);