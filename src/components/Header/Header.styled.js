import styled from 'styled-components';

export const CustomHeader = styled.header`
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-image: url(${require('../../Images/neve.png')});
        background-repeat: repeat;
        background-size: auto;
        height: auto; 
    }

    .navbar-brand {
    font-family: 'Fredoka One', cursive; 
    font-size: 2rem; 
    color: #FFA726; 
    text-shadow: 
        -2px -2px 0px #000, 
        2px -2px 0px #000, 
        -2px 2px 0px #000, 
        2px 2px 0px #000; 
    margin: 0;
    padding-left: 10px;
}

    .nav-link {
        font-family: 'Fredoka One', cursive; 
        font-size: 1.5rem; 
        color: #fff;
        text-shadow: 
            -2px -2px 0px #000, 
            2px -2px 0px #000, 
            -2px 2px 0px #000, 
            2px 2px 0px #000;  
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

    .nav-link.active {
        color:  #ffcc00 !important; 
        transform: scale(1.1);
        
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

    /* Ajustes para telas médias */
    @media (max-width: 1311px) and (min-width: 992px) {
        .nav-link {
            font-size: 1.7rem; 
            padding: 6px 15px;
        }

        .navbar-brand {
            font-size: 1.5rem; 
        }

        .btn-success {
            font-size: 1.1rem; 
        }
    }

    /* Ajustes para telas pequenas */
    @media (max-width: 992px) {
        .nav-link {
            font-size: 1.7rem; 
            padding: 5px 10px;
        }

        .navbar-brand {
            font-size: 1.5rem; 
        }

        .btn-success {
            font-size: 1rem; 
        }

        .navbar-nav {
            flex-direction: column; 
            align-items: center;
            gap: 10px;
        }
    }
`;
