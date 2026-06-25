import { Router } from "express";
import pool from "../database/postgre.js";

const router = Router();

router.get("/teste-postgres", async (req, res) => {
    try {
        const resultado = await pool.query(
            "SELECT * FROM usuarios"
        );

        res.json(resultado.rows);

    } catch (err) {
        res.status(500).json({
            erro: err.message
        });
    }
});

export default router;