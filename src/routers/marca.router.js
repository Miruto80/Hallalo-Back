import express from "express";

import { getMarcasController, createMarcaController, deleteMarcaController, updateMarcaController } from "../controllers/marca.controller.js";


const router = express.Router();

router.get("/marca", getMarcasController);

router.post("/marca", createMarcaController);

router.delete("/marca/:cod_marca", deleteMarcaController);

router.put("/marca/:cod_marca", updateMarcaController);

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
 *               n_marca:
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
 *   put:
 *     tags: [Marcas]
 *     summary: Actualizar una marca existente
 *     parameters:
 *       - in: path
 *         name: cod_marca
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               n_marca:
 *                 type: string
 *                 example: marca actualizada
 *     responses:
 *       200:
 *         description: Marca actualizada
 *       400:
 *         description: Petición inválida
 *       404:
 *         description: Marca no encontrada
 */