const express = require('express');
const departamentoController = require('../controllers/departamentoController'); // Asegúrate de que la ruta sea correcta

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Departamentos
 *   description: API para gestionar departamentos
 */

/**
 * @swagger
 * /api/departamentos:
 *   get:
 *     summary: Obtener todos los departamentos
 *     tags: [Departamentos]
 *     responses:
 *       200:
 *         description: Lista de departamentos
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
 *                   encargado:
 *                     type: integer
 *                   area:
 *                     type: integer
 */
router.get('/', departamentoController.getAllDepartamentos);

/**
 * @swagger
 * /api/departamentos:
 *   post:
 *     summary: Crear un nuevo departamento
 *     tags: [Departamentos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               encargado:
 *                 type: integer
 *               area:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Departamento creado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nombre:
 *                   type: string
 *                 encargado:
 *                   type: integer
 *                 area:
 *                   type: integer
 */
router.post('/', departamentoController.createDepartamento);

/**
 * @swagger
 * /api/departamentos/{id}:
 *   get:
 *     summary: Obtener un departamento por ID
 *     tags: [Departamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del departamento
 *     responses:
 *       200:
 *         description: Departamento obtenido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nombre:
 *                   type: string
 *                 encargado:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     nombre:
 *                       type: string
 *                 area:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     nombre:
 *                       type: string
 *       404:
 *         description: Departamento no encontrado
 */
router.get('/:id', departamentoController.getDepartamentoById);

/**
 * @swagger
 * /api/departamentos/{id}:
 *   patch:
 *     summary: Actualizar un departamento
 *     tags: [Departamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del departamento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               encargado:
 *                 type: integer
 *               area:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Departamento actualizado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nombre:
 *                   type: string
 *                 encargado:
 *                   type: integer
 *                 area:
 *                   type: integer
 *       404:
 *         description: Departamento no encontrado
 */
router.patch('/:id', departamentoController.updateDepartamento);

/**
 * @swagger
 * /api/departamentos/{id}:
 *   delete:
 *     summary: Eliminar un departamento
 *     tags: [Departamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del departamento
 *     responses:
 *       200:
 *         description: Departamento eliminado
 *       404:
 *         description: Departamento no encontrado
 */
router.delete('/:id', departamentoController.deleteDepartamento);

module.exports = router;