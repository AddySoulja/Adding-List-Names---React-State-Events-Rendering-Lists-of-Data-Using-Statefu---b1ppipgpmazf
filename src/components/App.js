import React, { useState, useEffect } from 'react'
import '../styles/App.css';
import List from "./List";
const App = () => {
  //code here
  const [inputText, setInputText] = useState('');
  const [list, setList] = useState([]);

  const addInList = () => {
    setList([...list, inputText]);
  }

  useEffect(() => {
    setInputText('');
  }, [list])

  return (
    <div id="main">
      <input
        id="input"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
      <button id="button" onClick={addInList}>Click</button>
      <ul id="list">
        <List listx={list} />
      </ul>
    </div>
  )
}


export default App;
