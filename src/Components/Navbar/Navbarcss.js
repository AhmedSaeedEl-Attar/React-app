import styled from "styled-components";

export const NavbarSection = styled.div`
  width: 100%;
  height: 100px;
  background: #ffffff;
  overflow: hidden;
  border-bottom: 2px solid #0e140ea3;
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
`;
export const Logo = styled.div`
  font-size: 30px;
  font-weight: 600;
  @media (max-width: 750px) {
    font-size: 20px;
  }
`;
export const NavLinks = styled.ul`
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  @media (max-width: 750px) {
    width: 90%;
  }
`;
export const Linka = styled.a`
  text-decoration: none;
  font-size: 20px;
  color: #000;
  cursor: pointer;
  font-weight: 500;
  @media (max-width: 750px) {
    font-size: 10px;
    font-weight: 700;
  }
  &:hover {
    color: rgb(226, 38, 38);
  }
`;
