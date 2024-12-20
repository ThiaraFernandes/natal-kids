import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {CardWrapper, Card, ModalWrapper, ModalContent, ModalTitle, ModalMessage, CloseButton, ResetButtonModal, SnowEffect, SparklingStar, 
  ButtonWrapper} from "./JogoMemoriaStyles"; 

export default function JogoMemoria() {
  const initialCards = [
    "🎅", "🎄", "⛄", "🎁", "🦌", "⭐", "🎅", "🎄",
    "⛄", "🎁", "🦌", "⭐", "❄", "❄", "✨", "✨", 
  ];

  const [cards, setCards] = useState(initialCards.sort(() => Math.random() - 0.5));
  const [flipped, setFlipped] = useState(Array(initialCards.length).fill(false));
  const [selectedCards, setSelectedCards] = useState([]);
  const [showModal, setShowModal] = useState(false); // Controle para mostrar a modal
  const navigate = useNavigate();


  const handleCardClick = (index) => {
    if (selectedCards.length === 2 || flipped[index]) {
      return; // Evita virar mais de 2 cartas ou clicar em uma já virada
    }

    // Virar a carta
    const newFlipped = [...flipped];
    newFlipped[index] = true;
    setFlipped(newFlipped);

    const newSelectedCards = [...selectedCards, { index, value: cards[index] }];
    setSelectedCards(newSelectedCards);

    if (newSelectedCards.length === 2) {
      // Verifica se as duas cartas são iguais
      if (newSelectedCards[0].value === newSelectedCards[1].value) {
        setSelectedCards([]); // Limpa os cards selecionados
        // Verifica se todas as cartas foram combinadas
        if (newFlipped.every((card) => card === true)) {
          setShowModal(true); // Exibe a modal quando o jogo é finalizado
        }
      } else {
        // As cartas não combinam, desvira após um curto intervalo
        setTimeout(() => {
          const resetFlipped = [...newFlipped];
          resetFlipped[newSelectedCards[0].index] = false;
          resetFlipped[newSelectedCards[1].index] = false;
          setFlipped(resetFlipped);
          setSelectedCards([]);
        }, 1000);
      }
    }
  };

  const shuffleCards = () => {
    const shuffledCards = [...initialCards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setFlipped(Array(shuffledCards.length).fill(false)); // Reseta o estado flipped
    setSelectedCards([]);
    setShowModal(false); // Fecha a modal quando o jogo é resetado
  };

  const closeModal = () => {
    setShowModal(false); // Fecha a modal ao clicar no botão "Fechar"
    shuffleCards(); // Reseta o jogo automaticamente após fechar a modal
  };

  const handleResetFromModal = () => {
    shuffleCards(); // Resetar o jogo diretamente da modal
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: " #b5dcb5", minHeight: "100vh" }}>
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="container p-4" style={{ backgroundColor: " #b5dcb5", borderRadius: "15px", maxWidth: "500px" }}>
          <h1 className="text-center" style={{ fontFamily: 'Arial, sans-serif', color: "#d9534f", marginBottom: "15px" }}>
            Jogo da Memória
          </h1>
  
          {/* Botão para voltar à página principal de jogos */}
          <div className="text-center mb-4">
            <button
              className="btn btn-danger"
              style={{ fontSize: "1.2rem", borderRadius: "5px", padding: "10px 20px" }}
              onClick={() => navigate("/Jogos")}
            >
              Voltar para Jogos
            </button>
          </div>
  
          <div className="row g-3 justify-content-center">
            {cards.map((card, index) => (
              <div className="col-3" key={index}>
                <CardWrapper onClick={() => handleCardClick(index)}>
                  <Card className={flipped[index] ? "flipped" : ""}>
                    <div className="front">{card}</div>
                    <div className="back"></div>
                  </Card>
                </CardWrapper>
              </div>
            ))}
          </div>
        </div>
      </div>
  
      {/* Modal de Parabéns */}
      {showModal && (
        <ModalWrapper>
          <ModalContent>
            <SnowEffect>❄</SnowEffect>
            <SparklingStar>✨</SparklingStar>
            <ModalTitle>Parabéns! 🎉</ModalTitle>
            <ModalMessage>
              Você completou o Jogo da Memória! Que a magia do Natal continue te encantando!
            </ModalMessage>
  
            <ButtonWrapper>
              <ResetButtonModal onClick={handleResetFromModal}>Jogar Novamente</ResetButtonModal>
              <CloseButton onClick={() => navigate("/Jogos")}>Fechar</CloseButton>
            </ButtonWrapper>
          </ModalContent>
        </ModalWrapper>
      )}
    </div>
  );
  
}
