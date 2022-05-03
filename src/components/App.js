import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const Para=document.getElementById("para")
  return (
    <div id="main">
      // Do not alter the main div
      <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      <button onClick={()=>'Para'}>CLICK</button>
    </div>
  );
}


export default App;
