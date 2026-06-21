import { Router } from "express";
import Depoimento from "../models/Depoimento.js";

const depoimentos = Router();

/* lista os depoimentos */
depoimentos.get("/depoimentos", async (req, res) => {
    try {
        const lista = await Depoimento.find().sort({ _id: -1 });
        res.json(lista);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

/* Cria o comentário quando enviado pelo site */
depoimentos.post("/depoimentos", async (req, res) => {
    try {

        const { nome, mensagem } = req.body;

        const novo = new Depoimento({
            nome,
            mensagem
        });

        await novo.save();

        res.status(201).json(novo);

    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

/* Deleta dados do banco mongo */
depoimentos.delete("/depoimentos/:id", async (req, res) => {
    try {

        const { id } = req.params;

        const deletado = await Depoimento.findByIdAndDelete(id);

        if (!deletado) {
            return res.status(404).json({ message: "Depoimento não encontrado" });
        }

        res.json({ message: "Deletado com sucesso" });

    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

export { depoimentos };