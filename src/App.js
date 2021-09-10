import './App.css';
import React, { useState } from 'react';






export default function App() {
  let alertvar = 0;
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((prev) => {
      return prev + 1;
    })
    if (localStorage.getItem('hs') <= count) {
      localStorage.setItem('hs', (count + 1));
    }

  }

  const reset = () => {
    if (alertvar === 1) {
      localStorage.setItem('hs', 0);
      setCount(0)
    } else if (alertvar === 0) {
      alert('Resetting progress would mean that you would lose your highscore, please press the button again if you\'re sure.');
      alertvar++;
    }

  }


  return (
    <div className="App">
      <header className="App-header">

        <h3>Your current high-score: {localStorage.getItem('hs')}</h3>
        <h1>{count}</h1>
        <h3>
          <button type="button" onClick={add} > click </button>
        </h3>
        <br />
        <button onClick={reset}>Reset Progress</button>
        <h6>
          <a href="https://thelanshow.gq">
            go back to thelanshow
          </a>
        </h6>
      </header>
    </div>
  );
}


