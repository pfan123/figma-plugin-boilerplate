import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [value, setValue] = useState(0)
  const handleChange = (e:any) => {
    setValue(e.target.value)
  }

  const handleCreate = () => {
    const count = value
    parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*')
  }

  const handleCancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
  }
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Rectangle Creator</h2>
      <p>Count: <input value={value} onChange={handleChange}/></p>
      <button id="create" onClick={handleCreate}>Create</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
}

export default App;
