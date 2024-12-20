import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HighlightedName = styled.span`
  color: #FFC107;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 
            -2px -2px 0px #000, 
            2px -2px 0px #000, 
            -2px 2px 0px #000, 
            2px 2px 0px #000;  
  animation: ${fadeIn} 1.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 2.5rem; 
  }

  @media (max-width: 576px) {
    font-size: 2rem; 
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #2e8b57;

  @media (max-width: 768px) {
    font-size: 2.2rem; 
  }

  @media (max-width: 576px) {
    font-size: 1.8rem; 
  }
`;

export const Subtitle = styled.h3`
  font-size: 3rem;
  color: #2e8b57;
  font-weight: bold;
  margin-bottom: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    font-size: 2.5rem; 
  }

  @media (max-width: 576px) {
    font-size: 2rem; 
  }
`;


// Container para o contador e os botões
export const ContainerSection = styled.div`
  background-color:rgb(203, 233, 203);
  border-radius: 12px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Botões redondos (bolas de Natal)
export const ButtonCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  outline: none;
  position: relative;
  outline: none;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 10px 3px #d62828;
    outline: 3px solid #d62828; 
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    font-size: 1.5rem;
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #dc3545;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  color: white;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #c82333; 
  }

  @media (max-width: 576px) {
    top: 0.8rem;
    right: 0.5rem;
    width: 30px;
    height: 30px;
    font-size: 1rem;
  }
`;

export const ContosTitle =styled.h1`
  font-size: 3.5rem;
  text-align: center;
  font-weight: bold;
  color: #28a745;

  @media (max-width: 768px) {
    font-size: 2.5rem; 
  }

  @media (max-width: 576px) {
    font-size: 2rem; 
  }
`;
