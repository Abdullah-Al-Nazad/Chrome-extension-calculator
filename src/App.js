import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [f,setF]=useState(0)
  const [s,setS]=useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Chrome extension
        </p>
        <h1>{f}+{s}={parseFloat(f)+parseFloat(s)}</h1>
        <input type="number" onChange={(e)=>setF(e.target.value)} value={f}/><br/>
        <input type="number" onChange={(e)=>setS(e.target.value)} value={s}/>
      </header>
    </div>
  );
}

export default App;
