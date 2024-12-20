import styled, { keyframes } from 'styled-components';

export const StyledContainer = styled.div`
  padding: 50px;
  text-align: center;

  @media (max-width: 425px) {
    padding: 20px; /* Reduz o padding em telas pequenas */
  }
`;

export const QuestionText = styled.h2`
  font-size: 4rem;
  margin-bottom: 40px;
  font-size: 3rem;
  color: #228B22;
  font-weight: bold;

  @media (max-width: 425px) {
    font-size: 2.1rem; 
    margin-bottom: 30px; 
  }
`;

export const StyledCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 30px;
  cursor: pointer;
  text-align: center;

  img {
    width: 100%; 
    height: 300px;
    object-fit: contain;
    margin-bottom: 10px;

    @media (max-width: 425px) {
      height: 200px; 
    }
  }

  &:hover {
    background-color: #a1c6a1;
  }

  @media (max-width: 425px) {
    padding: 15px;
  }
`;

export const ResultMessage = styled.div`
  color: ${(props) => (props.isCorrect ? 'green' : 'red')};
  font-weight: normal;
  font-size: 3rem;
  color: #f1faee;
  margin-bottom: 20px;

  @media (max-width: 425px) {
    font-size: 2.1rem; 
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    text-shadow: 0 0 20px #ff0000, 0 0 30px #ffffff;
    color: #ff0000;
  }
  50% {
    transform: scale(1.1);
    text-shadow:  0 0 25px #ffff00, 0 0 35px #ffffff;
    color: rgb(58, 144, 58);
  }
  100% {
    transform: scale(1);
    text-shadow:  0 0 20px #ff0000, 0 0 30px #ffffff;
    color: #ff0000;
  }
`;

export const AnimatedCongrats = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin: 20px 0;
  animation: ${pulse} 1.5s infinite; 

  @media (max-width: 425px) {
    font-size: 2rem; 
  }
`;

export const IntroTitle = styled.h2`
  font-size: 4rem;
  margin-top: 30px;
  color: #228B22;
  font-weight: bold;

  @media (max-width: 425px) {
    font-size: 2.5rem; 
    margin-top: 20px;  
  }
`;

export const IntroParagraph = styled.p`
  font-size: 2rem;
  margin-bottom: 30px;
  color: #f1faee;

  @media (max-width: 425px) {
    font-size: 1.5rem; 
    margin-bottom: 20px; 
  }
`;

export const StyledButton = styled.button`
  font-size: 2rem;
  padding: 15px 40px;
  background-color: #28a745;
  color: white;
  border: none;  
  border-radius: 5px;  
  cursor: pointer;

  &:hover {
    background-color: #218838;  
  }

  @media (max-width: 425px) {
    font-size: 1.6rem; 
    padding: 10px 30px; 
  }
`;

