import styled, {keyframes} from 'styled-components';

export const StyledContainer = styled.div`
  padding: 50px;
  text-align: center;
`;

export const QuestionText = styled.h2`
  margin-bottom: 40px;
  font-size: 3rem;
  color:  #228B22;
  font-weight: bold;
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
  }

  &:hover {
    background-color:#a1c6a1;
  }
`;

export const ResultMessage = styled.div`
  color: ${(props) => (props.isCorrect ? 'green' : 'red')};
  font-weight: normal;
  font-size: 3rem;
  color:#f1faee;
  margin-bottom: 20px;
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
    color:rgb(58, 144, 58);
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
`;
  