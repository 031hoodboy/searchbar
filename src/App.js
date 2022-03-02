import { useState, useEffect } from "react";
import styled from "styled-components";
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
    <AppBlock>
      <SearchBlock
        type="search"
        placeholder="searchField"
        onChange={(e) => setSearchField(e.target.value)}
      />
      <UserBlock>
        {filteredUsers.map((user) => (
          <InfoWrapper>
            <Name>{user.name}</Name>
            <Email>{user.email}</Email>
          </InfoWrapper>
        ))}
      </UserBlock>
    </AppBlock>
  );
}

const UserBlock = styled.div`
  width: 80%;
  margin-top: 10px;
`;

const InfoWrapper = styled.div`
  width: 100%;
  margin-top: 5px;
  padding: 0 10px;
`;

const Name = styled.div`
  font-size: 24px;
  font-weight: 500;
  width: 100%;
`;
const Email = styled.div`
  font-size: 18px;
`;

const AppBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchBlock = styled.input`
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
  outline: none;
  border: none;
  border-bottom: 1px solid #000;
  padding: 10px;
  font-size: 24px;
`;

export default App;
