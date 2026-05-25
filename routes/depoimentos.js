import { Router } from "express";

const depoimentos = Router();


const listaDepoimentos = [
  {
    nome: "Marina S.",
    mensagem: "O bolo de casamento foi simplesmente perfeito! Todos elogiaram o sabor e o visual impecável."
  },
  {
    nome: "Roberto C.",
    mensagem: "Nunca comi um ovo de Páscoa tão delicioso e bem feito. É realmente um presente de alto nível."
  },
  {
    nome: "Tatiane M.",
    mensagem: "Encomendei um bolo temático do Homem-Aranha pro meu filho e ficou incrível! Ele amou!"
  },
  {
    nome: "Eduardo V.",
    mensagem: "A atenção aos detalhes nos bolos personalizados me impressionou. Superaram minhas expectativas!"
  },
  {
    nome: "Lorena F.",
    mensagem: "Os convidados perguntaram onde eu tinha encomendado o bolo! Parabéns pelo trabalho incrível."
  },
  {
    nome: "Felipe e Ana",
    mensagem: "Flávio conseguiu transformar nossa ideia em um bolo de casamento de revista. Foi mágico!"
  },
  {
    nome: "Joana R.",
    mensagem: "Ótimo atendimento e entrega no prazo! Fez sucesso na minha festa."
  },
  {
    nome: "Carlos T.",
    mensagem: "O capricho em cada camada do bolo mostra o amor que ele coloca no que faz."
  },
  {
    nome: "Vanessa L.",
    mensagem: "O sabor é único e o acabamento é digno de vitrine. Com certeza vou encomendar de novo."
  }
];


depoimentos.get("/depoimentos", function (req, res) {
  res.json(listaDepoimentos);
});

export { depoimentos };
