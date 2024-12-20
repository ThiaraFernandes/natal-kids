import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { StyledContainer, StyledH1 } from "./HistoriaNatal.styled";

export default function HistoriaNatal() {
    return (
        <StyledContainer fluid className="py-4">

            {/* Primeira História */}
            <Row className="justify-content-center align-items-center mb-5">
                <Col xs={12} md={6} className="text-center">
                    <Image
                        src="/images/historia/papai-noel.jpg"
                        alt="Papai Noel"
                        fluid
                        className="rounded-circle mb-4"
                        style={{ maxWidth: "80%" }}
                    />
                </Col>

                <Col xs={12} md={6}>
                    <StyledH1 className=" fw-bold text-center mb-4">
                        Uma Aventura Mágica com o Papai Noel!
                    </StyledH1>
                    <p className="fs-3 text-white bg-success p-4 rounded shadow">
                        Imaginem só: lá no alto, no Polo Norte, existe uma oficina mágica onde o Papai Noel e seus ajudantes, os elfos, trabalham o ano todo! Eles constroem os brinquedos mais incríveis que você possa imaginar: carrinhos que voam, bonecas que falam e              até mesmo bicicletas que andam sozinhas!
                        Mas o que torna um presente tão especial? O Papai Noel tem uma missão muito importante: ele gosta de dar presentes para as crianças que são boas, que ajudam os outros e têm corações generosos. Isso é muito importante, porque o Natal é uma época de mostrar o quanto podemos ser gentis e amorosos com quem
                        está ao nosso redor!
                        Ele também diz que, quanto mais espalhamos bondade e amizade, mais a magia do Natal cresce. A verdadeira magia do Natal não está nos brinquedos, mas nos gestos de carinho que trocamos e na alegria de compartilhar com os outros!
                    </p>
                </Col>
            </Row>

            {/* Segunda História */}
            <Row className="justify-content-center align-items-center mb-5">
                <Col xs={12} md={6} className="order-md-2 text-center">
                    <Image
                        src="/images/historia/nascimento-jesus.png"
                        alt="Imagem da segunda história"
                        fluid
                        className="rounded-circle mb-4"
                        style={{ maxWidth: "80%" }}
                    />
                </Col>
                <Col xs={12} md={6} className="order-md-1">
                    <StyledH1 className=" fw-bold text-center mb-4">
                        A Magia do Natal e o Nascimento de Jesus!
                    </StyledH1>
                    <p className="fs-3 text-white bg-success p-4 rounded shadow">
                        O Natal também é um momento muito especial, porque é quando celebramos o nascimento de Jesus, o menino que trouxe para o mundo uma mensagem de amor, paz e esperança. Ele nos ensinou que o mais importante não é o que recebemos, mas o que damos aos outros com amor e generosidade.  Na noite do seu nascimento, no estábulo em Belém, uma estrela brilhava no céu para guiar os reis magos até ele, trazendo presentes valiosos: ouro, incenso e mirra. Mas o maior presente de todos foi o próprio Jesus, que nos ensinou a importância de
                        compartilhar e ajudar o próximo. Lembrar-se de Jesus no Natal nos faz entender que o verdadeiro espírito natalino está em espalhar alegria, paz e amor por onde
                        quer que a gente vá!
                    </p>
                </Col>
            </Row>

            {/* Terceira História: O Espírito de Compartilhar */}
            <Row className="justify-content-center align-items-center mb-5">
                <Col xs={12} md={6}>
                    <Image
                        src="/images/historia/presente.jpg" 
                        alt="Espírito de Natal"
                        fluid
                        className="rounded-circle mb-4"
                        style={{ maxWidth: "80%" }} 
                    />
                </Col>
                <Col xs={12} md={6}>
                    <StyledH1 className=" fw-bold text-center mb-4">
                        O Verdadeiro Espírito de Natal: Compartilhar!
                    </StyledH1>
                    <p className="fs-3 text-white bg-success p-4 rounded shadow">
                        O Natal também nos lembra da importância de estar perto das pessoas que amamos e de estender a mão para aqueles que precisam de ajuda. O espírito de Natal é sobre compartilhar: seja um sorriso, um abraço ou um gesto de carinho!
                        A verdadeira alegria do Natal não está nos presentes, mas em ver o brilho nos olhos das pessoas ao nosso redor, sabendo que fizemos a diferença em suas vidas. E você, o que pode fazer para tornar o Natal ainda mais especial para alguém?
                    </p>
                </Col>
            </Row>
        </StyledContainer>
    );
}
