import express, { json } from "express";
import cors from "cors";
import { depoimentos } from "./routes/depoimentos.js";
import { produtos } from "./routes/produtos.js";
import db from "./database/postgre.js"
import conectarMongo from "./database/mongo.js";


const app = express();
const porta = 3000

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

//Rota (GET) importada de "depoimentos"
app.use(depoimentos);

// Rota para produtos
app.use(produtos);

// Rota (POST) de receber o formulário
app.post("/contato", function (req, res) {
  const dados = req.body;

  console.log("Dados recebidos do formulário:", dados);

  res.json({ mensagem: "Mensagem recebida com sucesso!" });
});

function servidorFinalizado(){
  console.log(`Servidor rodando em http://localhost:${porta}`);
}

db.connect()
    .then(() => {
        console.log('Conectado ao PostgreSQL');
    })
    .catch((err) => {
        console.error('Erro ao conectar no PostgreSQL', err);
    });
conectarMongo();

app.listen(porta, servidorFinalizado)

