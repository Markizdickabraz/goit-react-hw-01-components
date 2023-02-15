import styled from "@emotion/styled";

export const Section = styled.section`
margin:16px;
width:480px;
text-align:center;
border:1px solid black;
`;

export const StatisticListStyle = styled.ul`
margin:0;
display:flex;
list-style:none;
padding:0;
`;

export const StatisticItem = styled.li`
display:flex;
flex-direction: column;
gap:8px;
background-color:${props => props.backgroundColor};
width: calc((100%-30px)/5);
height:50px;
`;
