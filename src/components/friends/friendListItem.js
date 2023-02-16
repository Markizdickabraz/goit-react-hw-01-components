import PropTypes from 'prop-types';
import { FriendItem, Status } from "./friends.styled";


export default function FriendListItem({id,avatar, name, isOnline}) {
    return (
    <FriendItem key= {id}>
            <Status isOnline ={isOnline}>{isOnline}</Status>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name }</p>
</FriendItem>
    )
};

FriendListItem.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,
}