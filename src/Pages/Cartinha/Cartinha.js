import React, { useState } from "react";
import { jsPDF } from "jspdf";
import { StyledTextarea, StyledButton, StyledImage, StyledTitle } from './Cartinha.styled';

export default function Cartinha() {

    const [cartinha, setCartinha] = useState('')

    const handleChange = (e) => {
        setCartinha(e.target.value);
    }

    const handleSavePDF = () => {
        const text = document.querySelector('textarea').value;
        const doc = new jsPDF();
        doc.text(10, 20, text || "Querido Papai Noel...");
        doc.save("cartinha-natal.pdf");

        setCartinha('');
    };

    return (
        <div className="container mt-5">
            <div className="row align-items-center mb-4">
                <div className="col-md-6 text-center text-md-start">
                    <StyledTitle>
                        Escreva sua Cartinha para o Papai Noel! 🎅
                    </StyledTitle>
                </div>
                <div className="col-md-6 text-center">
                    <StyledImage
                        src="/images/cartinha/papai-noel.jpg"
                        alt="Papai Noel lendo"
                    />
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-12">
                    <StyledTextarea
                        value={cartinha}
                        onChange={handleChange}
                        rows="15"
                        placeholder="Querido Papai Noel, este ano eu gostaria..."
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-12 text-center mb-5">
                    <StyledButton
                        className="btn btn-success btn-lg shadow mb-4"
                        onClick={handleSavePDF}
                    >
                        ✉️ Enviar para o Papai Noel
                    </StyledButton>
                </div>
            </div>
        </div>
    );
}
