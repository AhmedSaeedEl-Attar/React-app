import styled from "styled-components";

export const ContactSection = styled.div`
  text-align: center;
  padding: 60px 0px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ContactSectionH1 = styled.h1`
  font-size: 42px;
  margin-bottom: 20px;
`;

export const ContactSectionForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ContactSectionFirstLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
export const ContactSectionInput = styled.input`
  width: 48%;
  height: 40px;
  padding: 12px;
  border: 0.2px solid;
  font-size: 18px;
`;
export const ContactSectionInputSubject = styled(ContactSectionInput)`
  width: 100%;
`;
export const ContactSectionTextarea = styled.textarea`
  width: 100%;
  height: 200px;
  color: #fff;
  background-color: gray;
  margin: 20px 0px;
  padding: 11px;
  font-size: 18px;
`;
export const ContactSectionButton = styled.button`
  width: 250px;
  padding: 20px;
  border: 0;
  border-radius: 20px;
  color: #fff;
  font-size: 20px;
  background-color: chartreuse;
  cursor: pointer;
  margin: auto;
`;
