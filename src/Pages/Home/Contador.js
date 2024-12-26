import React, { useState, useEffect } from "react";

export default function Contador() {
    const natal = new Date("2025-12-25T00:00:00"); // Data do Natal de 2025
    const [days, setDays] = useState(0); // Apenas os dias serão exibidos

    useEffect(() => {
        const updateCounter = () => {
            const currentDate = new Date();
            const timeDifference = natal.getTime() - currentDate.getTime();

            if (timeDifference <= 0) {
                // Se o Natal já passou, define 0 dias
                setDays(0);
                return;
            }

            // Calcula os dias restantes
            const remainingDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
            setDays(remainingDays);
        };

        updateCounter(); // Atualiza na primeira renderização

        const intervalId = setInterval(updateCounter, 86400000); // Atualiza a cada 24 horas (1 dia)

        return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar
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
                Contagem Regressiva para o Natal de 2025!
            </h2>

            <div className="text-center">
                <span
                    style={{
                        color: "#e63946",
                        fontSize: "2.5rem",
                        fontWeight: "bold",
                    }}
                >
                    {days}
                </span>
                <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>dias</p>
            </div>
        </div>
    );
}
