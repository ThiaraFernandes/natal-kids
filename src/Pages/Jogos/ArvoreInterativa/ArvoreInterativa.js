import React, { useState, useEffect } from "react";
import { OrnamentButton, TreeContainer, TreeSpot, SidebarContainer, ActionButtons, TreeTittle, TreeParagraph } from './ArvoreStyle.js';
import { useNavigate } from "react-router-dom";

export default function ArvoreInterativa() {
    const [decorations, setDecorations] = useState([]);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60); // Tempo limite de 60 segundos
    const [gameFinished, setGameFinished] = useState(false);

    const navigate = useNavigate();

    // Pontos pré-definidos na árvore
    const treePositions = Array(12).fill(null);

    // Enfeites disponíveis
    const ornaments = ["🎄", "🎁", "✨", "❄️", "⭐", "🎅"];

    // Adicionar enfeite em uma posição
    const handleDrop = (index, ornament) => {
        if (!treePositions[index]) {
            treePositions[index] = ornament;
            setDecorations((prevDecorations) => {
                const updatedDecorations = [...prevDecorations, { index, ornament }];
                return updatedDecorations;
            });
            setScore(score + 10); // Cada enfeite vale 10 pontos
        }
    };

    // Reiniciar o jogo
    const resetGame = () => {
        setDecorations([]);
        setScore(0);
        setTimeLeft(60);
        setGameFinished(false); // Resetar o estado do jogo
    };

    // Temporizador
    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft]);

    // Verificar se todos os pontos foram preenchidos e parar o tempo
    useEffect(() => {
        if (decorations.length === treePositions.length) {
            setTimeLeft(0); // Parar o tempo
            setGameFinished(true); // Finalizar o jogo
            setTimeout(() => {
                setGameFinished(false); // Fechar a modal após 2 segundos
            }, 3000); // 2 segundos
        }
    }, [decorations]);

    // Finalizar o jogo
    const finishGame = () => {
        resetGame();
        navigate("/Jogos");
    };

    return (
        <div className="container mt-2" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <TreeTittle className="text-success text-center">Decore sua Árvore de Natal!</TreeTittle>
            <TreeParagraph className="text-danger text-center">
                Tempo restante: {timeLeft}s | Pontos: {score}
            </TreeParagraph>

            <div className="row">
                {/* Barra lateral com enfeites */}
                <div className="col-md-3">
                    <SidebarContainer>
                        <h4 className="text-success fs-1 text-center">Enfeites</h4>

                        <div className="d-flex flex-wrap justify-content-center">
                            {ornaments.map((ornament, index) => (
                                <OrnamentButton
                                    key={index}
                                    draggable
                                    onDragStart={(e) => e.dataTransfer.setData("text/plain", ornament)}
                                >
                                    {ornament}
                                </OrnamentButton>
                            ))}
                        </div>
                    </SidebarContainer>
                </div>

                {/* Árvore com pontos de decoração */}
                <div className="col-md-6">
                    <TreeContainer>
                        {treePositions.map((_, index) => (
                            <TreeSpot
                                key={index}
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={(e) => handleDrop(index, e.dataTransfer.getData("text/plain"))}
                            >
                                {decorations.find((d) => d.index === index)?.ornament || ""}
                            </TreeSpot>
                        ))}
                    </TreeContainer>
                </div>

                {/* Botões de controle */}
                <div className="col-md-3">
                    <ActionButtons>
                        <button className="btn btn-danger w-100 my-2 fs-4" onClick={resetGame}>
                            Reiniciar
                        </button>
                        <button className="btn btn-success w-100 my-2 fs-4" onClick={finishGame}>
                            Finalizar
                        </button>
                    </ActionButtons>
                </div>
            </div>

            {gameFinished && (
                <div
                    style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        padding: "20px",
                        borderRadius: "10px",
                        textAlign: "center",
                        fontSize: "1.5rem",
                        color: "white",
                        width: "300px",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
                        opacity: gameFinished ? 1 : 0,
                        transition: "opacity 1s ease-out",
                    }}
                >
                    <h2>Parabéns! Você completou a árvore! 🎉</h2>
                    <p>Você marcou {score} pontos.</p>
                </div>
            )}

            <footer style={{ marginTop: "10px", textAlign: "center", padding: "15px", backgroundColor: " #b5dcb5" }}>
                <p style={{ fontSize: "2rem" }}>🎄 Divirta-se decorando sua árvore! 🎅</p>
            </footer>
        </div>
    );
}
