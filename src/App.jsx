import { useState } from 'react';
import './App.css';
import dec from './assets/dec.png'
import inc from './assets/inc.png'
import reset from './assets/reset.png'


function App() {
  const [value, setvalue] = useState(0);
  return (
    <>
      <div className="container">
        <div className="display">{value}</div>
        <div className="controls">
          <button onClick={() => {
            if (value > 0) {
              setvalue(value - 1)
            }
          }}><img src={dec} alt="Increase" className="icons" /></button>
          <button onClick={() => {
            setvalue(0)
          }}><img src={reset} alt="Reset" className="icons" /></button>
          <button onClick={() => {
            setvalue(value + 1)
          }}><img src={inc} alt="Decrease" className="icons" /></button>
        </div>
      </div>
    </>
  )
}
export default App;