// import { User } from "../user/user";

export const Users = (props) => {
  return (
    <div>
      {props.users.map((user) => (
        <>
          <h2>{user.name}</h2>
          <h4>{user.email}</h4>
          {/* <User key={user.id} user={user} /> */}
        </>
      ))}
    </div>
  );
};
