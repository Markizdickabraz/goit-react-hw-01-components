import UserCard from "./userCard/userCard";
import User from '../../src/user.json';
import Statistics from "./statistics/statistics";
import FriendList from "./friends/friendsList";
import friends from "../../src/friends.json";
import TransactionsHistory from "./transationHistory/transationsHistory";


export const App = () => {
  return (
    <div>
    <UserCard
      username={User.username}
      tag={User.tag}
      location={User.location}
      avatar={User.avatar}
      stats={User.stats} />
      <Statistics/> 
      <FriendList
        friends={friends} />;
      <TransactionsHistory/>;
    </div>
  );
};
