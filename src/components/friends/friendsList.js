import FriendCard from "./friend"
import {FriendListStyle } from "./friends.styled";

export default function FriendList({ friends }) {
  return (
    <FriendListStyle>
      {friends.map(friends => (
        <FriendCard 
        key={friends.id}
        avatar={friends.avatar}
        name={friends.name}
        isOnline={friends.isOnline}
        id ={friends.id}/>
     
      ))}
    </FriendListStyle>
  );
}