import styled from "@emotion/styled";

export const Profile = styled.div`
padding: 15px;
background-color:#E0FFFF;
width: 240px;
`;

export const Description = styled.div`
background-color:#fff;
display:flex;
flex-direction: column;
align-items: center;
padding :8px;
`;

export const Avatar = styled.img`
width: 180px;
`;

export const NameTagLocation = styled.p`
margin:4px;
`;
export const Stats = styled.ul`
 list-style: none;
 display:flex;
 align-items: center;
 justify-content: center;
 padding:0;
`;

export const StatsItem = styled.li`
background-color:#E0FFFF;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:10px;
width: calc((100%-30px)/3);
`;
