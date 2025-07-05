import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background-color: #212226;
  width: 100%;
  min-height: calc(100vh - 67px);
  box-sizing: border-box;
`;

export const Title = styled.h2`
  text-align: center;
  color: #ffffff;
  font-family: "Sarala", sans-serif;
  font-size: 24px;
  margin-bottom: 30px;
`;

export const SeatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 15px;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  justify-items: center;
`;

export const Sidebar = styled.div`
  width: 99%;
  height: 3px;
  border: 1px solid #4e5a65;
  background-color: #4e5a65;
  margin: 15px 0;
`;

export const ErrorMessage = styled.div`
  text-align: center;
  color: #ff6b6b;
  font-size: 18px;
  padding: 40px;
`;

export const SeatButton = styled.button`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  font-size: 11px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &.available {
    background-color: #9DB899;
    border: 1px solid #808F9D;
    color: #000;
  }
  
  &.selected {
    background-color: #FADBC5;
    border: 2px solid #EE897F;
    color: #000;
  }
  
  &.unavailable {
    background-color: #2B2D36;
    border: 1px solid #2B2D36;
    color: #2B2D36;
    cursor: not-allowed;
  }
`;

export const FormSection = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  color: #FFFFFF;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
`;

export const Input = styled.input`
  padding: 15px;
  border: 1px solid #FFFFFF;
  border-radius: 3px;
  font-size: 18px;
`;


