export default function App() {
  return <>
   <h1>Hello</h1>
   {foobar()}

{/* Components can have props. */}
  <MessageBox message="Important!" textColor="green"/>
  <MessageBox message="Hello world" textColor="red"/>
  </>
}

function foobar() {
  // JSX is a JavaScript object, which is a value
  return <h1>foobar</h1>;
}

// Rules to define component
// 1. A component is a function
// 2. The first alphabet of the function must be uppercase
// 3. It must return JSX
//
// the first parameter of a component function is its props
// it is an object and the keys are the props
function MessageBox(props) {
  return <div style={{
    border:"1px solid black",
    padding:"10px",
    margin:"10px",
    color: props.textColor
  }}>{props.message}</div>
}