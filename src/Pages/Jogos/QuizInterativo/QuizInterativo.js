import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { StyledContainer, QuestionText, StyledCard, ResultMessage, AnimatedCongrats } from './QuizStyles';
import QuizData from './QuizData';

export default function QuizInterativo() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [showFeedback, setShowFeedback] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [quizFinished, setQuizFinished] = useState(false);
    const [showIntro, setShowIntro] = useState(true);
    const navigate = useNavigate();


    // Verifique se há perguntas no array
    if (!QuizData || QuizData.length === 0) {
        return (
            <StyledContainer>
                <h2>Erro: Nenhuma pergunta disponível no quiz.</h2>
            </StyledContainer>
        );
    }

    const handleAnswer = (option) => {
        const question = QuizData[currentQuestion];

        if (question.type === 'open') {
            const isCorrectAnswer = userAnswer.trim().toLowerCase() === question.correctAnswer.toLowerCase();
            setIsCorrect(isCorrectAnswer);
            if (isCorrectAnswer) setScore(score + 1);
        } else {
            setIsCorrect(option.isCorrect);
            if (option.isCorrect) setScore(score + 1);
        }
        setShowFeedback(true);
    };

    const nextQuestion = () => {
        setShowFeedback(false);
        setUserAnswer('');
        if (currentQuestion + 1 < QuizData.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setQuizFinished(true);
        }
    };

    const restartQuiz = () => {
        setScore(0);
        setCurrentQuestion(0);
        setQuizFinished(false);
        setShowIntro(true);
    };

    const question = QuizData[currentQuestion];

    return (
        <StyledContainer>
            {/* Botão para voltar à página principal de jogos */}
            <div className="text-center mb-4">
                <button
                    className="btn btn-danger "
                    style={{ fontSize: "1.5rem", borderRadius: "5px", padding: "10px 20px" }}
                    onClick={() => navigate("/Jogos")}
                >
                    Voltar para Jogos
                </button>
            </div>
    
            {quizFinished ? (
                <>
                    <AnimatedCongrats>
                        Parabéns! Você concluiu o quiz com {score}/{QuizData.length} pontos!
                    </AnimatedCongrats>
                    <button
                        className="btn btn-success"
                        style={{ fontSize: "2rem" }}
                        onClick={restartQuiz}
                    >
                        Reiniciar o Quiz
                    </button>
                </>
            ) : showIntro ? (
                <div>
                    <h2 style={{fontSize: "4rem", marginTop: "30px", color:"  #228B22", fontWeight:"bold"}}>Bem-vindo ao Quiz de Natal! 🎅🎄</h2>
                    <p style={{ fontSize: "2rem", marginBottom: "30px", color:"#f1faee",  }}>
                        Teste seus conhecimentos sobre o Natal e descubra o quanto você sabe sobre essa data mágica!
                    </p>
                    <button
                        className="btn btn-success"
                        style={{ fontSize: "2rem", padding: "15px 40px" }}
                        onClick={() => setShowIntro(false)}
                    >
                        Começar
                    </button>
                </div>
            ) : (
                <>
                    <QuestionText>{question.question}</QuestionText>
                    {!showFeedback && (
                        <>
                            {question.type === 'image' && (
                                <div className="row">
                                    {question.options.map((option, index) => (
                                        <div key={index} className="col-md-4">
                                            <StyledCard onClick={() => handleAnswer(option)}>
                                                <img src={option.img} alt={option.text} style={{ width: '100%' }} />
                                            </StyledCard>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {question.type === 'text' && (
                                <div className="row">
                                    {question.options.map((option, index) => (
                                        <div key={index} className="col-md-4" style={{ fontSize: "2rem" }}>
                                            <StyledCard onClick={() => handleAnswer(option)}>{option.text}</StyledCard>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                    {showFeedback && (
                        <div>
                            <ResultMessage isCorrect={isCorrect}>
                                {isCorrect ? 'Parabéns, você acertou!' : 'Que pena, tente novamente!'}
                            </ResultMessage>
                            <button
                                className="btn btn-success"
                                style={{ fontSize: "1.8rem" }}
                                onClick={nextQuestion}
                            >
                                Próxima Pergunta
                            </button>
                        </div>
                    )}
                </>
            )}
        </StyledContainer>
    );
}
