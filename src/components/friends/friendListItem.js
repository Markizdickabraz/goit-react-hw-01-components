import PropTypes from 'prop-types';
import { FriendItem, Status } from "./friends.styled";


export default function FriendListItem({avatar, name, isOnline}) {
    return (
    <FriendItem>
            <Status isOnline ={isOnline}>{isOnline}</Status>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name }</p>
</FriendItem>
    )
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,
}