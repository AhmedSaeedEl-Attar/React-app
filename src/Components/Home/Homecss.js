import styled from "styled-components";

export const HomeSection = styled.div`
  background-image: url("images/Home/home-bg.jpg");
  background-position: center;
  height: 500px;
  background-size: cover;
  position: relative;
`;

export const HomeContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
export const ConName1 = styled.h1`
  font-size: 75px;
  font-weight: 700;
  color: #ff2424;
  margin-bottom: 10px;
  @media (max-width: 750px) {
    font-size: 50px;
  }
`;
export const ConName3 = styled.h3`
  font-size: 30px;
  color: cornflowerblue;
  font-weight: 700;
  margin-bottom: 10px;
`;
export const ConPspan = styled.span`
  font-weight: 700;
`;
export const ConButton = styled.button`
  margin-top: 25px;
  padding: 10px 40px;
  border: 0;
  background: #ff2424;
  color: #fff;
  font-size: 22px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background: #fff;
    color: #ff2424;
    font-size: 22.5px;
    border-radius: 18px;
  }
`;
