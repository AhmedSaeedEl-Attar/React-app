import styled from "styled-components";

export const PortooSection = styled.div`
  padding: 60px 0;
  text-align: center;
`;
export const Portooh2 = styled.div`
  font-size: 43px;
  color: darkcyan;
  margin-bottom: 50px;
`;
export const PortooDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  margin: auto;
`;
export const PortooDivP = styled.p`
  font-size: 20px;
  color: white;
  padding: 10px 25px;
  background: orangered;
  border-radius: 9px;
  cursor: pointer;
`;
export const Images = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
`;
export const Imag = styled.img`
  width: 100%;
`;
export const HoldImgs = styled.div`
  width: 25%;
  position: relative;
`;
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0;
  background: ${(props) =>
    props.overlaycolor === 1 ? "#ff0000b3" : "rgba(235, 84, 36, 0.5)"};
  cursor: pointer;
  opacity: 0;
  transition: all 0.6s;
  &:hover {
    opacity: 1;
  }
`;
export const OverlayP = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 12px;
  border-radius: 10px;
`;
