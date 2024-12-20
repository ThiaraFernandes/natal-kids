import React from "react";
import Sleigh from "./Sleigh";

export default function FooterComponent() {
    return (
        <footer className="text-light text-center py-2 position-relative" style={{
            background: "#157347",
            borderTop: "2px solid #f6bb0b",
            boxShadow: "0 -5px 10px rgba(0, 0, 0, 0.1)",
        }}>

            <h1 className="mb-0 fs-4 fw-bold" style={{ fontFamily: "'Comic Sans MS', cursive" }}>
                Obrigado por visitar nossa Aldeia do Papai Noel! Volte sempre para mais aventuras mágicas! 🎅✨
            </h1>

            <p className="fs-3 fw-bold" style={{ animation: "blink 3s infinite" }}>
                <span className="mx-2" style={{ fontSize: "1.8rem" }}>🎄</span>
                Feliz Natal!
                <span className="mx-2" style={{ fontSize: "1.8rem" }}>❄️</span>
            </p>

            <p
                className="small mt-2 text-light" 
                style={{
                    fontSize: "1.1rem",
                    borderTop: "0.5px solid #FFFFFF",
                    width: "50%", 
                    margin: "10px auto", 
                    paddingTop: "5px",
                    textAlign: "center", 
                }}
            >
                &copy; 2024 - Todos os direitos reservados.
            </p>

            {/* Animação do trenó */}
            <Sleigh />
        </footer>
    );
}
