import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import ErrorModal from "./components/UI/ErrorModal";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      let count = prevUsersList.length;
      return [...prevUsersList, { name: userName, age: userAge, key: count++ }];
    });
  };
  return (
    <div>
      <ErrorModal title="An error occured" message="Something went wrong!" />
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
