import styled from "styled-components";

export const WorkSection = styled.div`
  margin: 30px 0;
`;
export const HeadWork = styled.div`
  font-size: 40px;
  font-weight: 500;
`;
export const HeadWorkSpan = styled.span`
  color: #ff2424;
  font-size: 45px;
`;
export const WorkContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 23px;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;
export const WorkItem = styled.div`
  text-align: center;
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 17px;
  border: 2px solid;
  @media (max-width: 750px) {
    width: 277px;
    margin-bottom: 30px;
  }
`;

export const Icon = styled.i`
  font-size: 50px;
  color: coral;
`;
export const ItemD = styled.div`
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ItemdP = styled.p`
  font-size: 29px;
  color: forestgreen;
  font-weight: 600;
`;
export const Itemdhr = styled.hr`
  margin: 5px 0;
  width: 100%;
`;
export const ItemdPPP = styled.p`
  margin-top: 6px;
`;
