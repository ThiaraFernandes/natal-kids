import styled from "styled-components";

export const OrnamentButton = styled.button`
    font-size: 2rem;
    margin: 10px 0;
    border: none;
    background: transparent;
    cursor: grab;
    transition: transform 0.3s ease, background-color 0.3s ease;

    &:hover {
        transform: scale(1.2);
        background-color: #f0f8ff;
        border-radius: 5px;
    }
`;

export const TreeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    justify-items: center;
    align-items: center;
    background: url('/images/jogos/arvore-interativa.png') no-repeat center;
    background-size: contain;
    height: 400px;
    margin-top: 30px;
`;

export const TreeSpot = styled.div`
    width: 60px;
    height: 60px;
    border: 2px dashed #ccc;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    background-color: rgba(255, 255, 255, 0.5);
    transition: background-color 0.3s ease;

    &:hover {
        background-color: rgba(0, 255, 0, 0.2);
        transform: scale(1.1);
    }
`;

export const SidebarContainer = styled.div`
    background-color: #b5dcb5;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
`;

export const ActionButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;
