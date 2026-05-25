import express, { json } from "express";
import cors from "cors";
import { depoimentos } from "./routes/depoimentos.js";



const app = express();
const porta = 3000

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

//Rota (GET) importada de "depoimentos"
app.use(depoimentos);

// Rota (POST) de receber o formulário
app.post("/contato", function (req, res) {
  const dados = req.body;

  console.log("Dados recebidos do formulário:", dados);

  res.json({ mensagem: "Mensagem recebida com sucesso!" });
});

function servidorFinalizado(){
  console.log(`Servidor rodando em http://localhost:${porta}`);
}

app.listen(porta, servidorFinalizado)

