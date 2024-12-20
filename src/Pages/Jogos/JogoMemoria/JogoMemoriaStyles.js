import styled, {keyframes} from "styled-components";

export const CardWrapper = styled.div`
  perspective: 1000px;
  width: 100%;
`;

export const Card = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%; 
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: rotateY(0deg);
  cursor: pointer;

  &.flipped {
    transform: rotateY(180deg);
  }

  .front, .back {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
  }

  .front {
    background: #ffffff;
    font-size: 2rem;
    font-weight: bold;
    transform: rotateY(180deg);
  }

  .back {
    background: #228B22; 
  }
`;

// Animação para a modal de vitória
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Efeito de estrela piscando
const sparkle = keyframes`
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
`;

// Animação de neve caindo
const snowFall = keyframes`
  0% {
    top: -10px;
  }
  100% {
    top: 100%;
  }
`;

// Modal com animação de fade-in
export const ModalWrapper = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.5s ease-in-out;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  position: relative;
  max-width: 500px;
  width: 100%;
`;

export const SnowEffect = styled.div`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  animation: ${snowFall} 5s linear infinite;
`;

export const SparklingStar = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  animation: ${sparkle} 1.5s infinite ease-in-out;
`;

export const ModalTitle = styled.h2`
  color: #d9534f;
  font-family: 'Arial', sans-serif;
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const ModalMessage = styled.p`
  font-size: 1.7rem;
  color: #333;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const CloseButton = styled.button`
  background-color: #d9534f;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.5rem;
  transition: background-color 0.3s ease;
  width: 150px;

  &:hover {
    background-color: #c12e2a;
  }
`;

export const ResetButtonModal = styled.button`
background-color: #228B22; 
  color: white;
  padding: 10px 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 150px;

  &:hover {
    background-color: #1e7a1e;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center; 
  gap: 20px; 
  margin-top: 20px;
`;


