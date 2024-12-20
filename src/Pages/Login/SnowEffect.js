import styled, { keyframes } from "styled-components";

// Animação de queda de neve
const fall = keyframes`
  0% {
    transform: translateY(-10px);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh);
    opacity: 0;
  }
`;

// Floco de neve individual
const Snowflake = styled.div`
  position: absolute;
  top: -10px; // Começa fora da tela
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
  opacity: 0.8;
  animation: ${fall} 5s linear infinite;
  left: ${(props) => props.left || "0%"};
  animation-delay: ${(props) => props.delay || "0s"};
  animation-duration: ${(props) => props.duration || "5s"};
`;

// Container da neve
const SnowContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; // A neve não interfere com os cliques
  overflow: hidden;
  z-index: 999; // Fica acima de tudo
`;

export default function SnowEffect() {
  const snowflakes = Array.from({ length: 50 }); // Quantidade de flocos

  return (
    <SnowContainer>
      {snowflakes.map((_, index) => (
        <Snowflake
          key={index}
          left={`${Math.random() * 100}%`} // Posição horizontal aleatória
          delay={`${Math.random() * 5}s`} // Tempo de atraso aleatório
          duration={`${Math.random() * 3 + 5}s`} // Duração aleatória
        />
      ))}
    </SnowContainer>
  );
}
