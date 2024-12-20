import styled from "styled-components";
import { Card, Button } from "react-bootstrap";


export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 50px 0;

  @media (max-width: 576px) {
    gap: 10px;
  }
`;

export const CardStyled = styled(Card)`
  width: 20rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 20px;
  border-radius: 20px;
  overflow: hidden;
  height: 100%;
  

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

export const ButtonStyled = styled(Button)`
  background-color: #ff6347;
  color: white;
  font-size: 1.5rem;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  width: 50%;
  border: none;

  &:hover {
    background-color: #ff4500;
  }

  &:focus {
    outline: none; 
    box-shadow: 0 0 8px rgba(255, 99, 71, 0.8); 
  }
`;

