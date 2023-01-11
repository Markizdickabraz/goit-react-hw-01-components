import { Avatar, Description, NameTagLocation, Profile, Stats, StatsItem } from "./userCard.styled"
export default function UserCard({ username, tag, location, avatar, stats }) {
    return (
        <Profile>
  <Description>
    <Avatar
      src={avatar}
      alt={tag}
      
    />
    <NameTagLocation>{username}</NameTagLocation>
    <NameTagLocation>@{tag}</NameTagLocation>
    <NameTagLocation>{location}</NameTagLocation>
  </Description>

  <Stats>
    <StatsItem>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </StatsItem>
    <StatsItem>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </StatsItem>
    <StatsItem>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </StatsItem>
  </Stats>
</Profile>
    )
}