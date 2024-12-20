import React from "react";
import {CarouselCard, CarouselContainer,CarouselImage,
    CarouselControls, SlideTitle} from "./CarouselCard";

    export default function Carousel() {
      return (
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 ">
              <CarouselCard>
                <CarouselContainer>
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-interval="3000"
                  >
                    {/* Indicadores */}
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="3"
                        aria-label="Slide 4"
                      ></button>
                    </div>
    
                    {/* Slides */}
                    <div className="carousel-inner">
                      <div className="carousel-item active position-relative">
                        <SlideTitle>História do Natal de Jesus</SlideTitle>
                        <CarouselImage
                          className="d-block w-100"
                          src="/images/carrossel/reis-magos.jpg"
                          alt="Natal"
                        />
                      </div>
                      <div className="carousel-item position-relative">
                        <SlideTitle>Papai Noel e a Magia do Natal</SlideTitle>
                        <CarouselImage
                          className="d-block w-100"
                          src="/images/carrossel/treno.jpg"
                          alt="Papai Noel"
                        />
                      </div>
                      <div className="carousel-item position-relative">
                        <SlideTitle>Jogos de Natal: Entre na brincadeira mágica!</SlideTitle>
                        <CarouselImage
                          className="d-block w-100"
                          src="/images/carrossel/criancas-brincando.jpg"
                          alt="Crianças brincando na neve"
                        />
                      </div>
                      <div className="carousel-item position-relative">
                        <SlideTitle>Já escreveu sua cartinha de Natal?</SlideTitle>
                        <CarouselImage
                          className="d-block w-100"
                          src="/images/carrossel/renas.jpg"
                          alt="Rena"
                        />
                      </div>
                    </div>
    
                    {/* Controles */}
                    <CarouselControls
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden"></span>
                    </CarouselControls>
                    <CarouselControls
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden"></span>
                    </CarouselControls>
                  </div>
                </CarouselContainer>
              </CarouselCard>
            </div>
          </div>
        </div>
      );
    }