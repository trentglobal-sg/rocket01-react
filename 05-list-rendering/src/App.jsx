export default function App() {
  
  const fruits = ["apples", "oranges", "bananas", "peaches"];
  const food = [
    {
      "name":"Chicken Rice",
      "calories": 600
    },
    {
      "name":"Burger",
      "calories": 800
    },
    {
      "name":"Egg Sandwich",
      "calories": 450
    }
  ]

  function renderFruits() {
    const jsx = [];
    for (let f of fruits) {
      jsx.push(<li>{f}</li>)
    }
    return jsx;
  }

  return <>
  <p>hello World</p>
    <ul>
      {renderFruits()}
    </ul>

    <ul>
      {
        fruits.map((fruit)=>{
          return <li>{fruit}</li>
        })
      }
    </ul>

    {
      food.map((food)=>{
        return <div>
          <h1>{food.name}</h1>
          <p>Calories: {food.calories}</p>
        </div>
      })
    }

  </>
}