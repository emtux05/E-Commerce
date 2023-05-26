import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const FooterCard = styled.div`
background-color: rgba(30, 30, 30, 1);
height: 305px;
`
export const InnerCard = styled.div`
display: grid;
grid-template-columns: 0.6fr 2.2fr 1fr;
gap: 20px;
`

export const LeftSection = styled.div`
justify-content: flex-start;
padding: 20px 20px 20px 40px;
flex: 0.5;
`

export const MiddleSection = styled.div`
flex:0.5;
display: column;
justify-content: flex-start;
color: #BFBEBE;
text-align: left;
margin-top: 100px;

`

export const RightSection = styled.div`
justify-content: flex-start;
flex: 0.5;
display: column;
color: #BFBEBE;
text-align: left;
margin-top: 100px;
`

export const RightFit = styled.h2`
font-weight: 900;
font-size: 18px;
color: #BFBEBE;
font-style: normal;

`

export const UsefulLinks = styled.div`
display: flex;
flex: 0.7;
text-decoration: none;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 400;
  font-size: 14px;
`;

export const List = styled.ul`
list-style-type:none;
padding: 0px;
`
export const ListItem = styled.li`
padding: 6px;
`
export const Image = styled.img`
width: 55%;
`

export const FooterText = styled.p`
font-weight: 400;
font-size: 14px;


`