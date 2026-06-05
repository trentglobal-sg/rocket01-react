import { useState, useEffect } from "react";
import axios from 'axios';

export default function App() {

  const [products, setProducts] = useState([]);

  // useEffect is a function that takes in two parameters
  // parameter 1: the effect function, which is called when the dependencies changes
  // parameter 2: an array of dependencies, if the depedencies is empty, then it means activate
  //              the effect when the component renders for the first time
  // however, the effect function CANNOT be async (restriction of react)
  useEffect(()=>{
    
    // define an async function inside the effect function
    const loadData = async () => {
      const response = await axios.get("data.json");
      setProducts(response.data);
    }
    loadData(); // call the aysnc function

  }, []);

  return <>
    <h1>Products222</h1>
    <button onClick={async ()=>{
      // any files in the public folder are considered as static files
      // when we have src="..." or when we refer to a relative URL,
      // React assumes the file is in the public folder
      const response = await axios.get("data.json");
      setProducts(response.data);
    }}>Load Data</button>
    <ul>
      {products.map( item => <li key={item.id}>{item.name} - ${item.price}</li>)}
    </ul>

  </>
}