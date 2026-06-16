import express from "express";
import cors from "cors";
import { depoimentos } from "./routes/depoimentos.js";
import { produtos } from "./routes/produtos.js";
import db from "./database/postgre.js";
import conectarMongo from "./database/mongo.js";

const app = express();
const porta = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Rota (GET) importada de depoimentos
app.use(depoimentos);

// Rota (GET) importada de produtos
app.use(produtos);

// Rota (POST) para receber os dados do formulário de contato
app.post("/contato", async function (req, res) {

    const dados = req.body;

    try {

        await db.query(
            `INSERT INTO contatos
            (nome, email, telefone, cidade, mensagem)
            VALUES ($1, $2, $3, $4, $5)`,
            [
                dados.nome,
                dados.email,
                dados.telefone,
                dados.cidade,
                dados.mensagem
            ]
        );

        console.log("Contato salvo com sucesso:", dados);

        res.json({
            mensagem: "Mensagem enviada com sucesso!"
        });

    } catch (erro) {

        console.error("Erro ao salvar contato:", erro);

        res.status(500).json({
            mensagem: "Erro ao enviar mensagem."
        });

    }

});

function servidorFinalizado() {
    console.log(`Servidor rodando em http://localhost:${porta}`);
}

// Conexão PostgreSQL
db.connect()
    .then(() => {
        console.log("Conectado ao PostgreSQL");
    })
    .catch((err) => {
        console.error("Erro ao conectar no PostgreSQL", err);
    });

// Conexão MongoDB
conectarMongo();

app.listen(porta, servidorFinalizado);

