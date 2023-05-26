import styled from "styled-components"

export const CardTitle = styled.h3`
  font-family: 'Noto Serif', serif;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  line-height: 25px;
  margin-bottom: -15px;
  color: #131414;
  margin-top: 8px;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
`;

export const CardPrice = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 0px;
  color: #5A112B;
`;

export const Card = styled.div`
  position: relative;
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  padding-right: 45px;
`;

export const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  background-color: #80808008;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 87%;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  span {
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
  }
`;

export const PaginationControl = styled.div`
padding-left: 0px;
padding-bottom: 20px;
margin-right: 240px;
width: 100%;
display: flex;
-webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: flex-end;
  margin-top: 20px;
  align-content: stretch;
  flex-wrap: wrap;
`

export const PaginationButtons = styled.div`
display: flex;
  justify-content: center;
`

export const PaginationNum = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;

  /* Add your desired styling for the pagination numbers */
  ${(props) =>
    props.currentPage &&
    `
    background-color: #D9D9D9;
    color: black;
  `}
`