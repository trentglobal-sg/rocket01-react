import "bootstrap/dist/css/bootstrap.min.css"

export default function App() {

  const menuItems = [
    {
      "id": 1,
      "name": "Fish Soup",
      "price": 12.30,
      "imageUrl": "https://picsum.photos/id/237/200/300"
    },
    {
      "id": 2,
      "name": "Mango Salad",
      "price": 11.15,
      "imageUrl": "https://picsum.photos/id/238/200/300"
    },
    {
      "id": 3,
      "name": "Fishball Noodles",
      "price": 9.90,
      "imageUrl": "https://picsum.photos/id/239/200/300"
    }
  ]

  return <div className="container">
    <h1>Our Menu</h1>

    {
      menuItems.map(item => (
        <div className="card mt-3" style={{ "width": "18rem" }}>
          <img src={item.imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Price: ${item.price}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      )
      )
    }




  </div>
}