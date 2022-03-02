import React from "react";
import styled from "styled-components";

export const Users = (props) => {
  return (
    <UserBlock>
      {props.users.map((user) => (
        <InfoWrapper>
          <Name>{user.name}</Name>
          <Email>{user.email}</Email>
        </InfoWrapper>
      ))}
    </UserBlock>
  );
};

const UserBlock = styled.div`
  width: 80%;
`;

const InfoWrapper = styled.div`
  width: 3000px;
`;

const Name = styled.div`
  width: 3000px;
`;
const Email = styled.div``;
