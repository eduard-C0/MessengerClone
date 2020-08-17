import React, { useState, useEffect} from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { FormControl, InputLabel, Input} from '@material-ui/core';
import Message from './Message.js';
import db from './firebase.js'
import firebase from 'firebase'

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [username, setUsername] = useState('');
  // useState is how you declare a variable in React
  // useEffect = run code on a condition in React

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })

  }, [])

  useEffect(() => {
      setUsername(prompt("Please enter your name:"));
  }, [])

  const sendMessage = (event) => {
      event.preventDefault();
      db.collection('messages').add({
        message:input,
        username:username,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      setInput('');
  }
  return (
    <div className="App">
      <h1>Welcome {username}</h1>
        <form>

        <FormControl>
            <InputLabel >Enter a message</InputLabel>
            <Input value={input} onChange={event => setInput(event.target.value)}/>
            <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Messange
            </Button>
        </FormControl>
         
        </form>


        {
          messages.map(message => (
            <Message username={username} message={message} />
          ))
        }
    </div>
  );
}

export default App;
