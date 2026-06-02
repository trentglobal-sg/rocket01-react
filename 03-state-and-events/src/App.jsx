import { useState } from "react"

export default function App() {

  // a state is data that belongs to a component
  // it controls some visual aspect of the component

  // useState is a function call to create a new state variable
  // it returns an array
  // index 0 is the current value of the state
  // index 1 is a function to set the value of the state
  // the parameter to the useState is the starting (aka default) value of the state
  const [message, setMessage] = useState("hello world");
  const [lightOn, setLightOn] = useState(false);

  return <>
    <div>
      {message}
      <button onClick={()=>{
        setMessage("Goodbye world");
      }}>Goodbye</button>
    </div>
    <div>
      <button onClick={()=>{
        setLightOn(true)
      }}>Turn On</button>
      <button onClick={()=>{
        setLightOn(false);
      }}>Turn Off</button>
      <div style={{
        border: "1px solid black",
        "width":"50px",
        "height":"50px",
        // ? is a ternary operator
        
        "backgroundColor": lightOn ? "yellow" : "white"
      }}>


      </div>
    </div>
  </>
}