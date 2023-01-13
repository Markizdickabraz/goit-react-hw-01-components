import PropTypes from 'prop-types';
import FriendListItem from "./friendListItem"
import {FriendListStyle } from "./friends.styled";

export default function FriendList({ friends }) {
  return (
    <FriendListStyle>
      {friends.map(friends => (
        <FriendListItem
        key={friends.id}
        avatar={friends.avatar}
        name={friends.name}
        isOnline={friends.isOnline}
        id ={friends.id}/>
     
      ))}
    </FriendListStyle>
  );
}
FriendList.prototype = {
  friends:PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
}