const express = require('express');
const encargadoController = require('../controllers/encargadoController'); // Asegúrate de que la ruta sea correcta

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Encargados
 *   description: API para gestionar encargados
 */

/**
 * @swagger
 * /api/encargados:
 *   get:
 *     summary: Obtener todos los encargados
 *     tags: [Encargados]
 *     responses:
 *       200:
 *         description: Lista de encargados
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
 *                   estudio:
 *                     type: string
 *                   turno:
 *                     type: string
 */
router.get('/', encargadoController.getAllEncargados);

/**
 * @swagger
 * /api/encargados:
 *   post:
 *     summary: Crear un nuevo encargado
 *     tags: [Encargados]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               estudio:
 *                 type: string
 *               turno:
 *                 type: string
 *     responses:
 *       201:
 *         description: Encargado creado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nombre:
 *                   type: string
 *                 estudio:
 *                   type: string
 *                 turno:
 *                   type: string
 */
router.post('/', encargadoController.createEncargado);

/**
 * @swagger
 * /api/encargados/{id}:
 *   get:
 *     summary: Obtener un encargado por ID
 *     tags: [Encargados]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del encargado
 *     responses:
 *       200:
 *         description: Encargado obtenido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nombre:
 *                   type: string
 *                 estudio:
 *                   type: string
 *                 turno:
 *                   type: string
 *       404:
 *         description: Encargado no encontrado
 */
router.get('/:id', encargadoController.getEncargadoById);

/**
 * @swagger
 * /api/encargados/{id}:
 *   patch:
 *     summary: Actualizar un encargado
 *     tags: [Encargados]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del encargado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               estudio:
 *                 type: string
 *               turno:
 *                 type: string
 *     responses:
 *       200:
 *         description: Encargado actualizado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nombre:
 *                   type: string
 *                 estudio:
 *                   type: string
 *                 turno:
 *                   type: string
 *       404:
 *         description: Encargado no encontrado
 */
router.patch('/:id', encargadoController.updateEncargado);

/**
 * @swagger
 * /api/encargados/{id}:
 *   delete:
 *     summary: Eliminar un encargado
 *     tags: [Encargados]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del encargado
 *     responses:
 *       200:
 *         description: Encargado eliminado
 *       404:
 *         description: Encargado no encontrado
 */
router.delete('/:id', encargadoController.deleteEncargado);

module.exports = router;