import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import natalMusic from "../../assets/audio/natal-instrumental.mp3";
import { FaPlay, FaPause } from "react-icons/fa";
import { CustomHeader, Title } from "./Header.styled";

export default function Header() {
    // isPlaying com false para a música começar desligada
    const [isPlaying, setIsPlaying] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const audioRef = useRef();

    const handleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying); // Alterna o estado
    };

    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    const closeMenu = () => setIsCollapsed(true); // Fecha o menu

    return (
        <>
            <CustomHeader>
                <header className="navbar navbar-expand-lg bg-danger shadow">
                    <div className="container-fluid">
                    
                        <Title className="navbar-brand mb-2 text-warning">
                            Bem-vindo(a) à aldeia do Papai Noel!
                        </Title>

                        {/* Botão Hamburger */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            onClick={toggleCollapse} // Alterna o estado do menu
                            aria-controls="navbarNav"
                            aria-expanded={!isCollapsed}
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Links de Navegação */}
                        <div className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`} id="navbarNav">
                            <ul className="navbar-nav ms-auto mt-1">
                                <li className="nav-item">
                                    <NavLink
                                        to="/Home"
                                        className={({ isActive }) => `nav-link custom-link ${isActive ? "active" : ""}`}
                                        onClick={closeMenu}
                                    >
                                        Início
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/Jogos"
                                        className={({ isActive }) => `nav-link custom-link ${isActive ? "active" : ""}`}
                                        onClick={closeMenu}
                                    >
                                        Jogos
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/Cartinha"
                                        className={({ isActive }) => `nav-link custom-link ${isActive ? "active" : ""}`}
                                        onClick={closeMenu}
                                    >
                                        Cartinha
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/HistoriaNatal"
                                        className={({ isActive }) => `nav-link custom-link ${isActive ? "active" : ""}`}
                                        onClick={closeMenu}
                                    >
                                        Histórias de Natal
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        {/* Botão de Música */}
                        <button
                            onClick={handleMusic}
                            className="btn btn-success ms-3 d-flex align-items-center justify-content-center"
                        >
                            {isPlaying ? <FaPause className="me-2" /> : <FaPlay className="me-2" />}
                            {isPlaying ? "Desativar música" : "Ativar música"}
                        </button>
                    </div>
                </header>
            </CustomHeader>

            {/* Player de Música */}
            <audio ref={audioRef} autoPlay={isPlaying} loop>
                <source src={natalMusic} type="audio/mpeg" />
                Seu navegador não suporta áudio.
            </audio>
        </>
    );
}