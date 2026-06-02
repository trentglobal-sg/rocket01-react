// import the image from the filename into a variable
import image from "./image.jpg";

// to use a CSS file, we must import it
import "./App.css";

export default function App() {
  // <>...</> is a React fragment
  return <> 
     {/*We can have put multiple children in a JSX element  */}
     <p>Merry Chrismas</p><p>Happy New Year</p>
     <p style={{
        backgroundColor: "green",
        fontSize: "16px"
     }}>What is 2 +2? Ans: {2 + 2}</p>
     <img src={image}/>
     {foobar()}
    </>
}

function foobar() {
  return "foobar";
}