import { useState } from 'react';

export default function App() {
  // declare your state here
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [op, setOp] = useState("");
  const [calcuatePressed, setCalculatePressed] = useState(false);

  // implement the calculate handler here
  function calculate() {
    if (op==="+") {
      return Number(n1) + Number(n2)
    }
  }

  return (
    <div>
      <input data-testid="a" type="number" value={n1}
        onChange={ e => setN1(e.target.value)}
      />
      <input data-testid="b" type="number" value={n2}
        onChange={e => setN2(e.target.value)}
      />

      <label>
        <input data-testid="op-add" type="radio" name="op" value="+" 
          onChange={ e => setOp(e.target.value)}
        />
        +
      </label>
      <label>
        <input data-testid="op-sub" type="radio" name="op" value="-" 
          onChange={ e => setOp(e.target.value)}
        />
        -
      </label>
      <label>
        <input data-testid="op-mul" type="radio" name="op" value="*" 
          onChange={ e => setOp(e.target.value)}
        />
        *
      </label>
      <label>
        <input data-testid="op-div" type="radio" name="op" value="/"
          onChange = { e => setOp(e.target.value)}
         />
        /
      </label>

      <button data-testid="calc" onClick={()=>{
        setCalculatePressed(true)
      }}>Calculate</button>

      <div data-testid="result" style={{
        visibility: calcuatePressed ? "visible": "hidden"
      }}>
        {calculate()}
      </div>
    </div>
  );
}