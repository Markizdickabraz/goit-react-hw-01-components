import UserCard from "./userCard/userCard";
import User from '../../src/user.json'

export const App = () => {
  return (
    <div>
    <UserCard
  username={User.username}
  tag={User.tag}
  location={User.location}
  avatar={User.avatar}
  stats={User.stats} />
    </div>
  );
};
