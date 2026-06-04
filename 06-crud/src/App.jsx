import { useState } from "react"

export default function App() {

  const [todos, setTodos] = useState([
    {
      "id": 1,
      "title": "Buy new batteries",
      "dateDue": new Date("2026-06-05"),
      "urgency": 3
    },
    {
      "id": 2,
      "title": "Go workout",
      "dateDue": new Date("2026-06-06"),
      "urgency": 4
    },
    {
      "id": 3,
      "title": "Wash the car",
      "dateDue": new Date("2026-06-07"),
      "urgency": 3
    }
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newDate, setNewDate] = useState(new Date());
  const [newUrgency, setNewUrgency] = useState(1);

  const [editTitle, setEditTitle] = useState("");
  const [editDate, setEditDate] = useState(new Date());
  const [editUrgency, setEditUrgency] = useState(1);

  // stores which todo we are editing. If null means we are not editing anything
  const [todoEdited, setTodoEdited] = useState(null);

  const [filter, setFilter] = useState("");

  const handleDelete = (todo) => {
    // find the index of the todo I want to delete
    const indexToDelete = todos.findIndex(t => t.id === todo.id);
    const cloned = todos.toSpliced(indexToDelete, 1);
    setTodos(cloned);
  }

  const beginEdit = (todo) => {
    setTodoEdited(todo);
    setEditTitle(todo.title);
    setEditDate(todo.dateDue);
    setEditUrgency(todo.urgency);
  }

  const handleEdit = (todo) => {
    const editedTodo = {
      id: todo.id,
      title: editTitle,
      dateDue: editDate,
      urgency: editUrgency
    }

    const indexToReplace = todos.findIndex(t => t.id === todo.id);
    // .with will create an array, and then replace the element at the index specified by the first parameter
    // with the value in the second parameter
    const cloned = todos.with(indexToReplace, editedTodo);
    setTodos(cloned);
    setTodoEdited(null);

  }

  const renderEdit = (todo) => {
    return (<>
      <div>
        <label>Title</label>
        <input type="text" value={editTitle} onChange={e => setEditTitle(e.target.value)} />
      </div>
      <div>
        <label>Date</label>
        <input type="date" value={editDate.toISOString().split("T")[0]} onChange={(e) => {
          setEditDate(new Date(e.target.value));
        }} />
      </div>
      <div>
        <label>Urgency</label>
        <input type="text" value={editUrgency} onChange={(e) => {
          setEditUrgency(e.target.value);
        }} />
      </div>
      <button onClick={() => {
        handleEdit(todo);
      }}>Update</button>
    </>)
  }

  const renderTodo = (task) => {
    return (<li key={task.id}>
      {task.title} (Urgency: {task.urgency}, Due: {task.dateDue.toLocaleDateString("en-GB")})


      {/* update button */}
      <button onClick={() => {
        beginEdit(task)
      }}>Update</button>

      {/* delete button */}
      <button onClick={() => {
        handleDelete(task);
      }}>Delete</button>



    </li>)
  }

  return <>
    <h1>Todo List</h1>

    <h2>Add New Todo</h2>
    <div>
      <label>Title</label>
      <input type="text" value={newTitle} onChange={e => setNewTitle(e.target.value)} />
    </div>
    <div>
      <label>Date</label>
      <input type="date" value={newDate.toISOString().split("T")[0]} onChange={(e) => {
        setNewDate(new Date(e.target.value));
      }} />
    </div>
    <div>
      <label>Urgency</label>
      <input type="text" value={newUrgency} onChange={(e) => {
        setNewUrgency(e.target.value);
      }} />
    </div>
    <button onClick={() => {
      const newTodo = {
        id: Math.floor(Math.random() * 10000 + 1),
        title: newTitle,
        dateDue: newDate,
        urgency: newUrgency
      }

      const cloned = [...todos, newTodo];
      setTodos(cloned);


    }}>Add New</button>

    <div>
      <label>Search:</label>
      <input type="text" value={filter} onChange={(e)=>{
        setFilter(e.target.value);
      }}/>
    </div>

    <ul>
      {
        todos
        .filter((t)=>t.title.toLowerCase().includes(filter.toLowerCase()))
        .map(task =>
          task.id !== todoEdited?.id ? renderTodo(task) : renderEdit(task)
        )
      }



    </ul>
  </>
}