
import styled from 'styled-components';

export const WebContainer = styled.div`
margin-top: 0px;
`;

export const Container = styled.div`
    margin-top: 35px;
    display: flex;
    padding: 0.5rem 0;
`

export const LeftSection = styled.div`
flex: 0.2;
`

export const RightSection = styled.div`
flex: 0.8;
    display: flex;
    flex-wrap: wrap;
`

export const BannerDiv = styled.div`
    position: absolute;
    top: 40%;
    left: 26%;
    transform: translate(-50%, -50%);
    text-align: left;
    color: #fff
`

export const BannerText = styled.h1`
    font-weight: 900;
    font-color: white;
    font-size: 64px;
    margin-bottom: 0px;

`
export const BannerText2 = styled.p`
font-color: white;
text-align: left;
margin-top: -7px;
font-weight: 500;
font-size: 20px;
`

export const BannerButton = styled.button`
font-weight: 600;
font-size: 16px;
color: white;
background-color: #CA4022;
width: 190px;
height: 48px;
border-radius: 10px;
border: none;
`