import styled from "styled-components";

export const AboutSection = styled.div`
  background: url(./images/creative/about-bg.jpg);
  height: 100vh;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const AboutContent = styled.div`
  position: absolute;
  top: 18%;
  left: 54%;
  width: 40%;
  height: 50%;
  padding: 10px;
`;
export const AboutContentP1 = styled.div`
  font-size: 35px;
  margin-bottom: 10px;
`;
export const AboutContentP2 = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
  color: chocolate;
  font-weight: 600;
`;
export const AboutContentP3 = styled.div`
  margin-bottom: 10px;
  line-height: 1.4;
`;
export const SocialContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
`;

export const SocialItem = styled.div`
  background-color: ${(props) => props.color && props.color};
  width: 33.33%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SocialItemI = styled.i`
  background: #fff;
  padding: 15px;
  margin-right: 15px;
  border-radius: 10px;
  box-shadow: 2px 4px 5px;
`;

export const SocialItemP = styled.p`
  font-size: 20px;
  color: #fff;
  margin-bottom: 5px;
`;
