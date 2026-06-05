import React from "react";
import { useState } from "react";

export default function App() {
  // @lock
  const [users, setUsers] = useState([
    {
      _id: Math.floor(Math.random() * 10000),
      name: "Jon Snow",
      email: "jonsnow@winterfell.com",
    },
    {
      _id: Math.floor(Math.random() * 10000),
      name: "Ned Stark",
      email: "nedstark@winterfell.com",
    },
    {
      _id: Math.floor(Math.random() * 10000),
      name: "Frodo Baggins",
      email: "frodo@bagend.com",
    },
  ]);

  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [editedUser, setEditedUser] = useState(null);
  const [editUserName, setEditUserName] = useState("");
  const [editUserEmail, setEditUserEmail] = useState("");

  function renderAddUser() {
    return (
      <React.Fragment>
        <input
          type="text"
          placeholder="User name"
          value={newUserName}
          onChange={updateFormField}
          name="newUserName"
          data-testid="new-name"
        />
        <input
          type="text"
          placeholder="User email"
          value={newUserEmail}
          onChange={updateFormField}
          name="newUserEmail"
          data-testid="new-email"
        />
        <button data-testid="add" onClick={addUser}>
          Add
        </button>
      </React.Fragment>
    );
  }
  // @endlock

  const addUser = () => {
    const newUser = {
      _id: Math.floor(Math.random() * 10000 + 1),
      name: newUserName,
      email: newUserEmail
    }

    const cloned = [...users, newUser];
    setUsers(cloned);

  };

  const beginEdit = (user) => {
    setEditedUser(user);
    setEditUserName(user.name);
    setEditUserEmail(user.email);
  };

  const deleteUser = (user) => {
    // 1. find the index of the user want to delete
    const indexToDelete = users.findIndex(u => u._id === user._id);

    // 2. delete the user with toSpliced
    const cloned = users.toSpliced(indexToDelete, 1);

    // 3. replace the original users array with the cloned
    setUsers(cloned);
  };

  const updateFormField = (e) => {
    // Get the name of the <input> that we are changing
    const inputName = e.target.name;
    if (inputName == "newUserName") {
      setNewUserName(e.target.value);
    }
    if (inputName == "newUserEmail") {
      setNewUserEmail(e.target.value)
    }
  };

  const renderEditUser = () => {
    if (editedUser) {
      return <div
        style={{
          position: "fixed",
          width: "300px",
          height: "200px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          border: "1px solid black",
          padding: "10px",
          boxSizing: "border-box"
        }}
      >
       <h3>Edit User</h3>
        <input
          type="text"
          placeholder="User name"
          value={editUserName}
          onChange={e => setEditUserName(e.target.value)}
        />
        <input
          type="text"
          placeholder="User email"
          value={editUserEmail}
          onChange={e => setEditUserEmail(e.target.value)}
        />
        <button data-testid="add" onClick={handleEditUser}>
          Update
        </button>
      </div>
    }
  };

  const handleEditUser = () => {
    // find the index of the user we are editing
    const updateIndex = users.findIndex( u => u._id === editedUser._id);

    // clone the original array, and replace the upateIndex with the updated user
    const updatedUser = {
      _id: editedUser._id,
      name: editUserName,
      email: editUserEmail
    }

    // use .with to clone the users array and update the updateIndex element with the updated user
    const cloned = users.with(updateIndex, updatedUser);

    // update the users array
    setUsers(cloned);

    // indicate that we are not editing any user
    setEditedUser(null);

  }

  // @lock
  return (
    <div className="App">
      {users.map((user) => {
        return (
          <React.Fragment key={user._id}>
            <div className="box">
              <h3>{user.name}</h3>
              <h4>{user.email}</h4>
              <button
                data-testid={`edit-${user.email}`}
                onClick={() => {
                  beginEdit(user);
                }}
              >
                Update
              </button>
              <button
                data-testid={`delete-${user.email}`}
                onClick={() => {
                  deleteUser(user);
                }}
              >
                Delete
              </button>
            </div>
          </React.Fragment>
        );
      })}
      {renderAddUser()}
      {renderEditUser()}
    </div>
  );
  // @endlock
}