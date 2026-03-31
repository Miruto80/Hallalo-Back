import express from "express";

import { getMarcasController, createMarcaController, deleteMarcaController } from "../controllers/marca.controller.js";


const router = express.Router();

router.get("/marca", getMarcasController);

router.post("/marca", createMarcaController);

router.delete("/marca/:cod_marca", deleteMarcaController);

export default router;



/**
 * @swagger
 * tags:
 *   name: Marcas
 *   description: API para marcas
 */

/**
 * @swagger
 * /api/marca:
 *   get:
 *     tags: [Marcas]
 *     summary: Obtener todas las marcas
 *     responses:
 *       200:
 *         description: Lista de marcas
 *   post:
 *     tags: [Marcas]
 *     summary: Crear una nueva marca
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               N_marca:
 *                 type: string
 *                 example: prueba
 *     responses:
 *       201:
 *         description: Marca creada
 * /api/marca/{cod_marca}:
 *   delete:
 *     tags: [Marcas]
 *     summary: Eliminar marca
 *     parameters:
 *       - in: path
 *         name: cod_marca
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Marca eliminada
 */