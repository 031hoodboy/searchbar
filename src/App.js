import { useState, useEffect } from "react";
import { Users } from "./component/users/users";

function App() {
  const [users, setUsers] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
      });
  });

  useEffect(() => {
    setFilteredUsers(() =>
      users.filter((user) =>
        user.name.toLowerCase().includes(searchField.toLowerCase())
      )
    );
  }, [searchField, users]);

  return (
    <div className="app">
      <input
        type="search"
        placeholder="searchField"
        onChange={(e) => setSearchField(e.target.value)}
      ></input>
      <Users users={filteredUsers} />
    </div>
  );
}

export default App;