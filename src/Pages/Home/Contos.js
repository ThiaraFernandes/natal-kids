
import React, { useState } from "react";

export default function Contos() {
    const contos = [
        {
            title: "O Menino Jesus e a Estrela de Belém",
            image: "/images/contos/estrela-belem.jpg",
            story: "Na pequena cidade de Belém, vivia um casal chamado José e Maria. Um anjo apareceu a Maria, anunciando que ela conceberia um filho pelo poder do Espírito Santo. Em um sonho, o mesmo anjo revelou a José que a gravidez de Maria era um milagre de Deus e que o filho seria o Salvador do mundo. Simultaneamente, uma estrela brilhante surgiu no céu, guiando os Reis Magos do Oriente até Belém. Esses sábios reconheceram na estrela o sinal do nascimento de um grande rei."
        },
        {
            title: "Os Pastores e a Boa Nova",
            image: "/images/contos/boas-novas.jpg",
            story: "Enquanto José e Maria estavam em Belém, um grupo de pastores cuidava de suas ovelhas no campo. De repente, um anjo apareceu e lhes contou a boa notícia do nascimento de Jesus. Os pastores foram até o estábulo para ver o menino e ficaram maravilhados."
        },
        {
            title: "O nascimento de Jesus",
            image: "/images/contos/manjedoura.jpg",
            story: "Na noite do nascimento de Jesus, Maria e José, sem encontrar lugar nas hospedarias de Belém, abrigaram-se em um estábulo simples. Ali, entre os animais, Maria deu à luz o menino Jesus e o colocou em uma manjedoura."
        },
        {
            title: "O Primeiro Natal",
            image: "/images/contos/primeiro-natal.jpg",
            story: "O primeiro Natal foi celebrado com muita alegria e esperança. Famílias se reuniram para celebrar o nascimento de Jesus e trocar presentes. A estrela de Belém brilhava no céu, lembrando a todos do grande presente que Deus havia dado ao mundo."
        },
        {
            title: "A Fuga para o Egito",
            image: "/images/contos/fuga-egito.jpg",
            story: "Após o nascimento de Jesus, um rei malvado ordenou que todos os meninos recém-nascidos fossem mortos. Para proteger Jesus, José e Maria tiveram que fugir para o Egito. Lá, ficaram escondidos até que o rei malvado morreu."
        },
        {
            title: "O Menino que Cresceu",
            image: "/images/contos/Jesus.jpg",
            story: "Jesus cresceu em uma pequena cidade chamada Nazaré. Ele aprendeu a ser caridoso, compassivo e a amar a todos. Quando adulto, Jesus começou a pregar sobre o amor de Deus e a importância de ajudar os outros."
        },
    ]

    const [activeIndex, setActiveIndex] = useState(null);
    const toggleStory = (index) => {
        setActiveIndex(activeIndex === index ? null : index);

    };

    return (
        <div className="container py-5 ">
            <h2 className="fw-bold text-center my-4 mt-4 mb-5 text-success" style={{ fontSize: "3.5rem" }}>
                História  do Natal de Jesus
            </h2>

            <div className="row my-5">
                {contos.map((conto, index) => (
                    <div className="col-md-4 mb-3 d-flex align-items-stretch" key={index}>
                        <div className="card h-100 w-100">
                            <img src={conto.image} 
                            className="card-img-top" 
                            style={{ objectFit: "cover", width: "100%", height:"300px"}} 
                            alt={conto.title}
                            />

                            <div className="card-body d-flex flex-column justify-content-between w-100" >
                                <h5 className="card-title fs-3">{conto.title}</h5>
                            </div>

                            <button
                                className="btn btn-success btn-sm fs-4"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#historia${index}`}
                                aria-expanded="false"
                                aria-controls={`historia${index}`}
                                onClick={() => toggleStory(index)}
                            >
                                {activeIndex === index ? "Fechar história" : "Ler a história"}
                            </button>
                            {activeIndex === index && (
                                <div className="mt-2">
                                    <p className="card-text fs-4 p-3">{conto.story}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}