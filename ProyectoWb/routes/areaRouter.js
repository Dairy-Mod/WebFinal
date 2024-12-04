const express = require('express');
const areaController = require('../controllers/areaController'); // Asegúrate de que la ruta sea correcta

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Áreas
 *   description: API para gestionar áreas
 */

/**
 * @swagger
 * /api/areas:
 *   get:
 *     summary: Obtener todas las áreas
 *     tags: [Áreas]
 *     responses:
 *       200:
 *         description: Lista de áreas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   nombre:
 *                     type: string
 *                   edificio:
 *                     type: string
 */
router.get('/', areaController.getAllAreas);

/**
 * @swagger
 * /api/areas:
 *   post:
 *     summary: Crear una nueva área
 *     tags: [Áreas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               edificio:
 *                 type: string
 *     responses:
 *       201:
 *         description: Área creada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nombre:
 *                   type: string
 *                 edificio:
 *                   type: string
 */
router.post('/', areaController.createArea);

/**
 * @swagger
 * /api/areas/{id}:
 *   get:
 *     summary: Obtener un área por ID
 *     tags: [Áreas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del área
 *     responses:
 *       200:
 *         description: Área obtenida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nombre:
 *                   type: string
 *                 edificio:
 *                   type: string
 *       404:
 *         description: Área no encontrada
 */
router.get('/:id', areaController.getAreaById);

/**
 * @swagger
 * /api/areas/{id}:
 *   patch:
 *     summary: Actualizar un área
 *     tags: [Áreas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del área
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               edificio:
 *                 type: string
 *     responses:
 *       200:
 *         description: Área actualizada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nombre:
 *                   type: string
 *                 edificio:
 *                   type: string
 *       404:
 *         description: Área no encontrada
 */
router.patch('/:id', areaController.updateArea);

/**
 * @swagger
 * /api/areas/{id}:
 *   delete:
 *     summary: Eliminar un área
 *     tags: [Áreas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del área
 *     responses:
 *       200:
 *         description: Área eliminada
 *       404:
 *         description: Área no encontrada
 */
router.delete('/:id', areaController.deleteArea);

module.exports = router;