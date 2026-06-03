import { useState } from "react"

export default function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [duration, setDuration] = useState("");
  const [countries, setCountries] = useState([]);

  function handleCheckbox(e) {
    // check if the checkbox is being checked
    if (e.target.checked) {
      const cloned = [...countries, e.target.value];
      setCountries(cloned);
    } else {
      // we are unchecking, so remove from array
      const indexToRemove = countries.findIndex((country)=>{
        return country == e.target.value;
      })
      //  toSpliced will modify a copy of the array and return it
      const cloned = countries.toSpliced(indexToRemove, 1);
      setCountries(cloned);
    }

  }


  return <>

    <h1>Survey Form: Travel Destinations</h1>
    <div>
      <label>Name:</label>
      {/* the value of the textbox will be the value of the `name` state */}
      <input type="text" value={name} onChange={(e) => {
        // e is the event object
        // e.target is the DOM element that the event is happening on
        // e.target.value is the new value of the DOM element
        setName(e.target.value); // change the name state to be whatever the user is typing in the textbox
      }} />
    </div>
    <div>
      <label>Email:</label>
      <input type="email" value={email} onChange={(event) => {
        setEmail(event.target.value)
      }} />
    </div>
    <div>
      <label>How many days do you travel for</label>
      <input type="radio" value="less-than-a-week" name="duration"
        onChange={(e) => {
          setDuration(e.target.value);
        }}
        checked={duration === "less-than-a-week"}
      /><label>Less than a week</label>

      <input type="radio" value="one-to-two-week" name="duration"
        onChange={(e) => {
          setDuration(e.target.value);
        }}
        checked={duration === "one-to-two-week"}
      /><label>One week to two weeks</label>

      <input type="radio" value="more-than-two-weeks" name="duration"
        onChange={(e) => {
          setDuration(e.target.value);
        }}
        checked={duration === "more-than-two-weeks"}
      /><label>More than two weeks</label>
    </div>
    <div>
      <label>Which destinations do you want to visit?</label>

      <input type="checkbox" value="japan" name="country"
        onChange={handleCheckbox}
      />
      <label>Japan</label>

      <input type="checkbox" value="bali" name="country"
        onChange={handleCheckbox}
      />
      <label>Bali</label>

      <input type="checkbox" value="new-zealand" name="country"
        onChange={handleCheckbox}
      />
      <label>New Zealand</label>

      <input type="checkbox" value="others" name="country"
        onChange={handleCheckbox}
      />
      <label>Others</label>

    </div>


  </>
}