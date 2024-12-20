import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap"; // Importando Row e Col
import { CardContainer, CardStyled, ButtonStyled } from "./JogosStyle";

export default function JogoHome() {
  return (
    <div className="container mt-5 text-center">
      <h1 className="text-success">Escolha um jogo para começar!</h1>
      <CardContainer>
        <Row className="justify-content-center"> 

          {/* Jogo 1 */}
          <Col xs={12} sm={6} lg={4} className="mb-4"> 
            <CardStyled className="text-center mx-auto">
              <div style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px', overflow: 'hidden' }}>
                <CardStyled.Img
                  variant="top"
                  src="/images/jogos/memoria.jpg"
                  alt="Jogo da Memória"
                  style={{ objectFit: 'cover', height: '200px', width: '100%' }}
                />
              </div>
              <CardStyled.Body>
                <CardStyled.Title className="text-danger fs-1">Jogo da memória!</CardStyled.Title>
                <CardStyled.Text className="fs-4">Divirta-se com o jogo da memória de Natal!</CardStyled.Text>
                <ButtonStyled className="btn btn-danger">
                  <Link to="JogoMemoria" style={{ textDecoration: "none", color: "white" }}>
                    Começar
                  </Link>
                </ButtonStyled>
              </CardStyled.Body>
            </CardStyled>
          </Col>

          {/* Jogo 2 */}
          <Col xs={12} sm={6} lg={4} className="mb-4">
            <CardStyled className="text-center mx-auto">
              <div style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px', overflow: 'hidden' }}>
                <CardStyled.Img
                  variant="top"
                  src="/images/jogos/arvore-natal.jpg"
                  alt="Decore sua Árvore"
                  style={{ objectFit: 'cover', height: '200px', width: '100%' }}
                />
              </div>
              <CardStyled.Body>
                <CardStyled.Title className="text-warning fs-1">Decore sua Árvore!</CardStyled.Title>
                <CardStyled.Text className="fs-4">Decore sua árvore de Natal com os enfeites!</CardStyled.Text>
                <ButtonStyled className="btn btn-danger">
                  <Link to="ArvoreInterativa" style={{ textDecoration: "none", color: "white" }}>
                    Começar
                  </Link>
                </ButtonStyled>
              </CardStyled.Body>
            </CardStyled>
          </Col>

          {/* Jogo 3 */}
          <Col xs={12} sm={6} lg={4} className="mb-4">
            <CardStyled className="text-center mx-auto">
              <div style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px', overflow: 'hidden' }}>
                <CardStyled.Img
                  variant="top"
                  src="/images/jogos/natalInterativo.png"
                  alt="Quiz Interativo"
                  style={{ objectFit: 'cover', height: '200px', width: '100%' }}
                />
              </div>
              <CardStyled.Body>
                <CardStyled.Title className="text-danger fs-1">Natal Interativo!</CardStyled.Title>
                <CardStyled.Text className="fs-4">Divirta-se com o Papai Noel e seus amigos!</CardStyled.Text>
                <ButtonStyled className="btn btn-danger">
                  <Link to="QuizInterativo" style={{ textDecoration: "none", color: "white" }}>
                    Começar
                  </Link>
                </ButtonStyled>
              </CardStyled.Body>
            </CardStyled>
          </Col>

        </Row>
      </CardContainer>
    </div>
  );
}
