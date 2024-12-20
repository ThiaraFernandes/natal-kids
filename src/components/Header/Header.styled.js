import styled from "styled-components";

export const CustomHeader = styled.header`
    .navbar {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background-image: url(${require("../../Images/neve.png")});
        background-repeat: repeat;
        background-size: auto;
        height: auto;
        padding: 10px 15px;
        gap: 10px;
    }

    .navbar-brand {
        font-family: "Fredoka One", cursive;
        font-size: 2rem;
        color: #ffa726;
        text-shadow: -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000, 2px 2px 0px #000;
        margin: 0;
        padding-left: 10px; 
    }

    .navbar-toggler {
        margin-left: auto; 
        padding: 8px 12px;
        border: none;
        background-color: transparent;
    }

    .nav-link {
        font-family: "Fredoka One", cursive;
        font-size: 1.5rem;
        color: #fff;
        text-shadow: -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000, 2px 2px 0px #000;
        padding: 8px 20px;
        border-radius: 10px;
        transition: all 0.3s ease;

        &:hover {
            color: #ffcc00 !important;
            transform: scale(1.1);
        }

        &.active {
            color: #ffcc00;
            border: 1px solid #ffcc00;
            transform: scale(1.1);
        }

        &.active:hover {
            background: #ffcc00;
            color: #fff;
        }
    }

    .btn-success {
        background-color: #008000;
        border: none;
        font-size: 1.3rem;

        &:hover {
            background-color: #198754;
            color: #fff;
            box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
        }
    }

    .navbar-nav {
        display: flex;
        gap: 20px;
        margin-left: auto;
        margin-right: auto;
    }

    .navbar-toggler {
        margin-left: auto;
    }

    /* Ajustes para telas médias (1024px) */
    @media (max-width: 1024px) and (min-width: 992px) {
        .navbar-brand {
            font-size: 1.8rem; /* Reduz o tamanho do título */
        }

        .nav-link {
            font-size: 1.3rem; /* Reduz o tamanho dos links */
            padding: 5px 12px; /* Ajusta o espaçamento interno */
        }

        .btn-success {
            font-size: 1rem; /* Diminui o tamanho do botão */
            padding: 5px 10px;
        }
    }

    /* Ajustes para telas pequenas (menores que 992px) */
    @media (max-width: 992px) {
        .navbar-brand {
            font-size: 1.5rem; /* Reduz o tamanho do título */
        }

        .nav-link {
            font-size: 1.2rem; /* Diminui o tamanho dos links */
            text-align: center; /* Centraliza os links */
            padding: 5px 10px;
        }

        .navbar-nav {
            flex-direction: column; /* Links em coluna */
            align-items: center;
            gap: 15px; /* Espaçamento entre links */
        }

        .btn-success {
            font-size: 1rem; /* Reduz o botão */
        }
    }

    /* Ajustes para telas pequenas de celulares (425px e menores) */
    @media (max-width: 425px) {

        .navbar {
            flex-direction: row; /* Mantém o layout em linha */
        }

        .navbar-brand {
            font-size: 1.2rem; /* Diminui o tamanho do título */
            text-align: left; 
        }

        .nav-link {
            font-size: 1rem; 
            padding: 5px 8px; 
        }

        .navbar-toggler {
            padding: 5px 8px; 
        }

        .btn-success {
            font-size: 0.9rem; 
            padding: 4px 8px;
        }
    }

    /* Ajustes para telas muito pequenas (375px e menores) */
    @media (max-width: 375px) {
        .navbar-brand {
            font-size: 1rem; 
            padding-left: 0;
        }

        .nav-link {
            font-size: 0.9rem; 
        }

        .navbar-toggler {
            padding: 4px 6px; 
        }

        .btn-success {
            font-size: 0.8rem; 
        }
    }
`;

export const Title = styled.h1`
    font-size: 4rem;

    /* Ajuste para telas menores que 768px */
    @media (max-width: 768px) {
        font-size: 1.5rem; 
        text-align: center; 
    }

    /* Ajuste para telas menores que 425px */
    @media (max-width: 425px) {
        font-size: 1.2rem; 
    }

    /* Ajuste para telas menores que 375px */
    @media (max-width: 375px) {
        font-size: 1rem; 
        text-align: left;
        margin-left: 0;
    }
`;
