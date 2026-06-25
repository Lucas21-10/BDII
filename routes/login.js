// routes/login.js

import { Router } from "express";
import db from "../database/postgre.js";

const router = Router();

router.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  try {
    const resultado = await db.query(
      "SELECT * FROM usuarios WHERE email = $1 AND senha = $2",
      [email, senha]
    );

    if (resultado.rows.length === 0) {
      return res.status(401).json({
        mensagem: "Email ou senha inválidos"
      });
    }

    res.json({
      mensagem: "Login realizado com sucesso",
      usuario: resultado.rows[0]
    });

  } catch (erro) {
    res.status(500).json({
      erro: erro.message
    });
  }
});

export default router;