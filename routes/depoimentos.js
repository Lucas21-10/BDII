import { Router } from "express";
import Depoimento from "../models/Depoimento.js";

const depoimentos = Router();

depoimentos.get("/depoimentos", async (req, res) => {
  try {

    const listaDepoimentos = await Depoimento.find();

    res.json(listaDepoimentos);

  } catch (erro) {

    res.status(500).json({
      erro: erro.message
    });

  }
});

export { depoimentos };