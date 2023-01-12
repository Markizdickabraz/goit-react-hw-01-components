import styled from "@emotion/styled";

export const FriendListStyle = styled.ul`
list-style: none;
display:flex;
flex-direction: column;
gap:10px;
`;

export const FriendItem = styled.li`
display:flex;
gap:15px;
border:1px solid #000;
width: 240px;
align-items: center;
justify-content: baseline;
`;

export const Status = styled.span`
width: 15px;
height:15px;
border-radius: 50%;
margin-left: 15px;
background-color: ${props => {
    switch (props.isOnline) {
        case true:
            return 'green';
        case false:
            return 'red';
        default:
            return '#fff';
   }
}};
`;
// ${(props)=>{
//     if (props.isOnline) {
//         background - color: green;
//     }
//     background - color: red;
// }}