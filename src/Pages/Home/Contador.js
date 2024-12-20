import React, { useState, useEffect } from "react";

export default function Contador() {
    const natal = new Date("2024-12-25T00:00:00");
    const [date, setDate] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const updateCounter = () => {
            const currentDate = new Date();
            const timeDifference = natal.getTime() - currentDate.getTime();

            // Se o Natal já passou
            if (timeDifference <= 0) {
                clearInterval(intervalId); // Limpa o intervalo
                setDate({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    secounds: 0
                });
                return;
            }

            // Converte a diferença em dias, horas, minutos e segundos
            const days = Math.floor(timeDifference / (1000 * 3600 * 24)); // Arredonda para baixo
            const hours = Math.floor((timeDifference % (1000 * 3600 * 24)) / (1000 * 3600)); // Horas restantes
            const minutes = Math.floor((timeDifference % (1000 * 3600)) / (1000 * 60)); // Minutos restantes
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000); // Segundos restantes

            setDate({ days, hours, minutes, seconds });
        };

        updateCounter(); // Atualiza o contador logo na primeira renderização

        const intervalId = setInterval(updateCounter, 1000); // Atualiza o contador a cada 1 segundo

        return () => clearInterval(intervalId); // Limpa o intervalo quando o componente for desmontado
    }, []);

    return (
        <div
        className="card p-4 shadow-lg mx-auto animate__animated animate__fadeInDown"
        style={{
            background: "rgba(255, 255, 255, 0.8)",
            borderRadius: "15px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            maxWidth: "400px",
            margin: "20px auto",
            border: "none",
        }}
    >
        <h2
            className="mb-3 text-center fs-3 text-success"
            style={{
                textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
            }}
        >
            Contagem Regressiva para o Natal!
        </h2>
    
        {/* Ajuste da estrutura responsiva */}
        <div className="row d-flex flex-column flex-lg-row justify-content-center align-items-center">
            <div className="col-6 col-sm-6 col-lg-3 mb-2">
                <span
                    style={{
                        color: "#e63946",
                        fontSize: "1.8rem",
                        fontWeight: "bold",
                    }}
                >
                    {date.days}
                </span>
                <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>dias</p>
            </div>
    
            <div className="col-6 col-sm-6 col-lg-3 mb-2">
                <span
                    style={{
                        color: "#457b9d",
                        fontSize: "1.6rem",
                        fontWeight: "bold",
                    }}
                >
                    {date.hours}
                </span>
                <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>horas</p>
            </div>
    
            <div className="col-6 col-sm-6 col-lg-3 mb-2">
                <span
                    style={{
                        color: "#f4a261",
                        fontSize: "1.6rem",
                        fontWeight: "bold",
                    }}
                >
                    {date.minutes}
                </span>
                <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>minutos</p>
            </div>
    
            <div className="col-6 col-sm-6 col-lg-3 mb-2">
                <span
                    style={{
                        color: "#2a9d8f",
                        fontSize: "1.6rem",
                        fontWeight: "bold",
                    }}
                >
                    {date.seconds}
                </span>
                <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>segundos</p>
            </div>
        </div>
    </div>
    
    );
    
    
}
