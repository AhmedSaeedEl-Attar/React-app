import styled from "styled-components";

export const TodoSection = styled.div`
  width: 100%;
  height: 86vh;
  background: cornflowerblue;
`;

export const TodoContent = styled.div`
  padding: 70px 0;
  text-align: center;
`;
export const TodoH1 = styled.div`
  padding: 0;
  margin: 0;
  font-size: 60px;
  color: #fff;
  margin-bottom: 30px;
`;
export const TodoDiv1 = styled.div`
  width: 100%;
  border: 2px solid #fff;
`;
export const TodoDivok = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TodoSpan1 = styled.span`
  text-align: center;
  display: block;
  width: 80%;
  background: darkslateblue;
  padding: 11px 0px;
  color: #fff;
  font-size: 24px;
`;
export const TodoSpan2 = styled.span`
  width: 20%;
  text-align: center;
  background: crimson;
  font-size: 24px;
  padding: 11px 0;
  color: #fff;
`;
export const TodoSpan11 = styled.div`
  text-align: center;
  display: block;
  width: 80%;
  background: #f1f1f1;
  padding: 16px 0px;
  color: #121111;
  font-size: 15px;
  overflow: hidden;
`;
export const TodoSpan22 = styled.div`
  width: 20%;
  text-align: center;
  background: crimson;
  font-size: 40px;
  padding: 1px 0;
  color: #fff;
  border: 1px solid;
  box-sizing: border-box;
  cursor: pointer;
`;

export const TodoForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Todoinput1 = styled.input`
  width: 80%;
  height: 50px;
  border: 0;
  &:focus {
    border: 0px;
    outline: 0px;
  }
`;
export const Todoinput2 = styled.input`
  width: 20%;
  border: 0;
  height: 49px;
  font-size: 28px;
  background: forestgreen;
  color: #fff;
  cursor: pointer;
  &:hover {
    font-size: 26px;
    color: #e2e2e2;
  }
`;

export const TodoNoitems = styled.div`
  width: 100%;
  padding: 20px;
  background: bisque;
  font-size: 27px;
`;
