import React,{useState} from "react";
import "./App.css"


const labeStyle = {
  color : "red"
}

function App() {

  const textChange = (e) =>{
    setText(e.target.value);
}

  const [inputText,setText] = useState("");

  return (
    <div className="App">
        <h1>My name is Hansel</h1>

        <ul>
          <li className="label-highlight">age : </li>
          <li className="label-highlight"> city : </li>

          <label className="label-highlight">what you want</label><br></br>
          <textarea onChange={textChange}></textarea>
        </ul>

        <label style={labeStyle}>what you type</label>
        <p>{inputText}</p>


        <p>현재 글자 수 : {inputText.length}</p>
    </div>
  );
}

export default App;

