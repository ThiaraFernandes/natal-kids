import React from "react";

export const QuizData = [
    {
        type: 'text',
        question: ' O que se comemora no Natal?',
        options: [
            { text: 'Nascimento de Jesus', isCorrect: true },
            { text: 'Páscoa', isCorrect: false },
            { text: 'Aniversário do Papai Noel', isCorrect: false },
          ],
      },
    {
        type: 'text',
        question: 'Em que cidade Jesus nasceu? ',
        options: [
          { text: 'Natal', isCorrect: false },
          { text: 'Belém', isCorrect: true },
          { text: 'Jerusalém', isCorrect: false },
        ],
      },
      {
        type: 'text',
        question: 'Quando Jesus acabou de nascer, onde o bebê foi colocado? ',
        options: [
          { text: 'Em um cesto de ovos', isCorrect: false },
          { text: 'Em um berçário', isCorrect: false },
          { text: ' Em uma manjedoura', isCorrect: true },
        ],
      },
      {
        type: 'text',
        question: 'Quem visitou Jesus após o seu nascimento?',
        options: [
            { text: 'Os soldados', isCorrect: false},
            { text: 'Os reis magos e os pastores', isCorrect: true },
            { text: 'Os amigos', isCorrect: false },
          ],
      },
      
      {
        type: 'image',
        question: 'Qual destas imagens representa o nascimento de Jesus?',
        options: [
          { img: 'https://img.freepik.com/fotos-gratis/close-em-bebe-recem-nascido-dormindo_23-2151004110.jpg?uid=R56661535&ga=GA1.1.332202650.1725639176&semt=ais_tags_boosted',  isCorrect: false },
          { img: 'https://img.freepik.com/vetores-gratis/presepio-de-silhueta-criativa_23-2148782759.jpg?uid=R56661535&ga=GA1.1.332202650.1725639176&semt=ais_tags_boosted', isCorrect: true },
          { img: 'https://img.freepik.com/fotos-gratis/segurando-mao-pes-grandes-do-bebe_1122-1121.jpg?uid=R56661535&ga=GA1.1.332202650.1725639176&semt=ais_tags_boosted', isCorrect: false },
        ],
      },

      {
        type: 'text',
        question: 'Como os reis magos encontraram Jesus?',
        options: [
            { text: 'Foram avisados através de um anjo', isCorrect: false},
            { text: 'Guiaram-se através de uma grande estrela', isCorrect: true },
            { text: 'Encontram Jesus por acaso', isCorrect: false },
          ],
      },
      {
        type: 'text',
        question: 'Que dia é comemorado o Natal?',
        options: [
            { text: '20', isCorrect: false},
            { text: '25', isCorrect: true },
            { text: '01', isCorrect: false },
          ],
      },

      {
        type: 'text',
        question: 'Qual o nome do rei que queria matar Jesus? ',
        options: [
          { text: 'Pilatos', isCorrect: false},
          { text: 'Tito Lívio', isCorrect: false },
          { text: 'Herodes', isCorrect: true },
        ],
      },
      {
        type: 'text',
        question: 'Quantas letrinhas há na palavra JESUS ?',
        options: [
            { text: '5', isCorrect: true},
            { text: '6', isCorrect: false },
            { text: '4', isCorrect: false },
          ],
      },
      {
        type: 'text',
        question: 'Quais foram os presentes que os reis magos ofereceram a Jesus?',
        options: [
            { text: 'Ouro, prata e bronze', isCorrect: false},
            { text: 'Ouro, incenso e mirra', isCorrect: true },
            { text: 'Ouro, perfume e azeite', isCorrect: false },
          ],
      },


];

export default QuizData;