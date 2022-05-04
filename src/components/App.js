import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [click,setClick]=useState();
  
  return (
    <div id="main">
      // Do not alter the main div
      <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      <button id='click' onClick={()=>setClick(!click)}>CLICK</button>
    </div>
  );
}


export default App;
