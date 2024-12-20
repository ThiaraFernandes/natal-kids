import styled from "styled-components";

export const CarouselCard = styled.div`
  border-radius: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  margin: 20px auto;
  max-width: 100%;
  width: 100%;
  height: 470px; 

  @media (max-width: 1200px) {
    height: 400px; 
  }

  @media (max-width: 768px) {
    height: 300px; 
  }

  @media (max-width: 576px) {
    height: 250px; 
  }
`;

export const CarouselContainer = styled.div`
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  height: 100%;
  width: 100%;

  .carousel {
    width: 100%;
    height: 100%;
  }

  .carousel-inner {
    height: 100%; 
  }

  .carousel-item {
    height: 100%; 

  }
`;

export const CarouselImage = styled.img`
  height: 100%; 
  width: 100%; 
  object-fit: cover; 
  border-radius: 10px;
`;

export const CarouselControls = styled.button`
  color: rgba(209, 160, 84, 0.8);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover {
    background-color: rgba(209, 160, 84, 1);
  }

  &.carousel-control-prev {
    left: 10px;
  }

  &.carousel-control-next {
    right: 10px;
  }
`;

export const SlideTitle = styled.h3`
  position: absolute;
  top: 25px;
  right: 20px;
  color: #ffc107;
  font-size: 2.4rem;
  font-weight: bold;
  z-index: 10;
  padding: 10px;
  border-radius: 5px;
  /* text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.9); */
  text-shadow: 
            -2px -2px 0px #000, 
            2px -2px 0px #000, 
            -2px 2px 0px #000, 
            2px 2px 0px #000;
`;
