
import styled from 'styled-components';

export const Container = styled.div`
display: flex;
position: fixed;
top: 0;
left: 0;
right: 0;
background: white;
z-index: 999;
background-color: blue;
height: 55px;
background-color: transparent;
`;

export const SubContainer = styled.div`
max-width: 1440px;
display: flex;
padding: 0.5rem 2rem;
width: 100%;
`

export const LeftSection = styled.div`
flex: 0.3;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const RightSection = styled.div`
    flex: 0.7;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`