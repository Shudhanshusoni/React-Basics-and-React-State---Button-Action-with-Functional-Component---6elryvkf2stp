import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [click,setClick]=useState();
  const Text="Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
  
  return (
    <div id="main">
      // Do not alter the main div
      <p id="para">{Text}</p>
      <button id='click' onClick={()=>setClick(!click)}>CLICK</button>
    </div>
  );
}


export default App;
