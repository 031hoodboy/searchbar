import { User } from "../user/user";

export const Users = (props) => {
  return (
    <div>
      {props.users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};
