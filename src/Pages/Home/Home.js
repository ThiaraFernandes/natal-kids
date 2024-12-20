import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStyles from "../../styles/Global"
import Header from '../../components/Header/Header';
import Contos from "./Contos";
import Carousel from "./Carrossel";
import Contador from "./Contador";
import { HighlightedName, Title, Subtitle, ButtonCircle, ContainerSection, ButtonClose } from "./HomeStyle";
import { Link } from "react-router-dom";
import { ChildNameContext } from "./Contexts/ChildNameContext";


export default function Home({ }) {
    const { childName, setChildName } = useContext(ChildNameContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("childName");
        setChildName("");
        navigate("/"); // Redireciona para a tela de login
    };

    return (
        <>
            <GlobalStyles />
            <Header />
            <div className="min-vh-100 text-center py-4 position-relative">
                {/* Botão de Logout */}
                <ButtonClose
                    onClick={handleLogout}
                >
                    ❌
                </ButtonClose>

                <div className="container">
                    <Title className="fw-bold mt-1 text-success">
                        Olá, <HighlightedName>{childName} </HighlightedName>! 🎄 Que a magia do Natal te envolva!
                    </Title>

                    <p className="fs-4 text-secondary mt-3" style={{ color: "#f1faee" }}>
                        Deixe a magia e o brilho do Natal encherem seu coração! ✨❤️
                    </p>

                    <Carousel />

                    {/* Container com Contador e Botões */}
                    <Subtitle>
                        Escolha a sua aventura de Natal! 🎄
                    </Subtitle>

                    <ContainerSection className="row align-items-center mt-5">
                        {/* Coluna do Contador */}
                        <div className="col-md-6 mb-4 mb-md-0">
                            <Contador />
                        </div>

                        {/* Coluna dos Botões em formato bola de Natal */}
                        <div className="col-md-6 d-flex justify-content-center gap-4">
                            <div className="text-center">
                                <Link to="/Jogos">
                                    <ButtonCircle className="bg-danger text-white shadow">🎮</ButtonCircle>
                                </Link>
                                <p className="mt-2 text-warning fs-2">Jogos</p>
                            </div>

                            <div className="text-center">
                                <Link to="/Cartinha">
                                    <ButtonCircle
                                        className="shadow"
                                        style={{ backgroundColor: "#e09f3e", color: "#fff" }}
                                    >
                                        ✉️
                                    </ButtonCircle>
                                </Link>
                                <p className="mt-2 text-warning fs-2">Cartinha</p>
                            </div>

                            <div className="text-center">
                                <Link to="/HistoriaNatal">
                                    <ButtonCircle className="bg-success text-white shadow">📖</ButtonCircle>
                                </Link>
                                <p className="mt-2 text-warning fs-2">Histórias</p>
                            </div>
                        </div>
                    </ContainerSection>

                    <Contos />
                </div>
            </div>
        </>
    );
}