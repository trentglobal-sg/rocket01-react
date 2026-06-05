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
  const [editedUser, setEditedUser] = useState({});

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
    // TODO: copy the user's name/email into the form fields and store the
    // user in editedUser.
  };

  const deleteUser = (user) => {
    // TODO: remove this user from the list by its _id.
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
    // TODO: return the edit form (two inputs + Save button) when
    // editedUser has an _id. The Save button should call addUser.
  };

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
      {renderEditUser()}
      {renderAddUser()}
    </div>
  );
  // @endlock
}