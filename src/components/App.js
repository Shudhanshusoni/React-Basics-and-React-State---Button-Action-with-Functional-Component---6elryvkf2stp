import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [click,setClick]=useState();
  let text = "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
  return (
    <div id="main">
      // Do not alter the main div
      <button id='click' onClick={()=>setClick(!click)}>CLICK</button>
      <h6 id="para">{text}</h6>
    </div>
  );
}


export default App;
