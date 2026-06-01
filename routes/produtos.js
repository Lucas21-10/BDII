import { Router } from "express";
import db from "../database/postgre.js";

const produtos = Router();

produtos.get("/produtos", async function (req, res) {
  try {

    const resultado = await db.query(
      "SELECT * FROM produtos"
    );

    res.json(resultado.rows);

  } catch (erro) {

    console.error(erro);

    res.status(500).json({
      erro: "Erro ao buscar produtos"
    });

  }
});

export { produtos };