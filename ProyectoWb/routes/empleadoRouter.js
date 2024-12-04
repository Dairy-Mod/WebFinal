const express = require('express');
const empleadoController = require('../controllers/empleadoController'); // Asegúrate de que la ruta sea correcta

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Empleados
 *   description: API para gestionar empleados
 */

/**
 * @swagger
 * /api/empleados:
 *   get:
 *     summary: Obtener todos los empleados
 *     tags: [Empleados]
 *     responses:
 *       200:
 *         description: Lista de empleados
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
 *                   apellido:
 *                     type: string
 *                   edad:
 *                     type: number
 *                   genero:
 *                     type: string
 *                   departamento1:
 *                     type: integer
 *                   departamento2:
 *                     type: integer
 *                   departamento3:
 *                     type: integer
 */
router.get('/', empleadoController.getAllEmpleados);

/**
 * @swagger
 * /api/empleados:
 *   post:
 *     summary: Crear un nuevo empleado
 *     tags: [Empleados]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               apellido:
 *                 type: string
 *               edad:
 *                 type: number
 *               genero:
 *                 type: string
 *               departamento1:
 *                 type: integer
 *               departamento2:
 *                 type: integer
 *               departamento3:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Empleado creado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nombre:
 *                   type: string
 *                 apellido:
 *                   type: string
 *                 edad:
 *                   type: number
 *                 genero:
 *                   type: string
 *                 departamento1:
 *                   type: integer
 *                 departamento2:
 *                   type: integer
 *                 departamento3:
 *                   type: integer
 */
router.post('/', empleadoController.createEmpleado);

/**
 * @swagger
 * /api/empleados/{id}:
 *   get:
 *     summary: Obtener un empleado por ID
 *     tags: [Empleados]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del empleado
 *     responses:
 *       200:
 *         description: Empleado obtenido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nombre:
 *                   type: string
 *                 apellido:
 *                   type: string
 *                 edad:
 *                   type: number
 *                 genero:
 *                   type: string
 *                 departamento1:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     nombre:
 *                       type: string
 *                 departamento2:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     nombre:
 *                       type: string
 *                 departamento3:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     nombre:
 *                       type: string
 *       404:
 *         description: Empleado no encontrado
 */
router.get('/:id', empleadoController.getEmpleadoById);

/**
 * @swagger
 * /api/empleados/{id}:
 *   patch:
 *     summary: Actualizar un empleado
 *     tags: [Empleados]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del empleado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               apellido:
 *                 type: string
 *               edad:
 *                 type: number
 *               genero:
 *                 type: string
 *               departamento1:
 *                 type: integer
 *               departamento2:
 *                 type: integer
 *               departamento3:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Empleado actualizado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nombre:
 *                   type: string
 *                 apellido:
 *                   type: string
 *                 edad:
 *                   type: number
 *                 genero:
 *                   type: string
 *                 departamento1:
 *                   type: integer
 *                 departamento2:
 *                   type: integer
 *                 departamento3:
 *                   type: integer
 *       404:
 *         description: Empleado no encontrado
 */
router.patch('/:id', empleadoController.updateEmpleado);

/**
 * @swagger
 * /api/empleados/{id}:
 *   delete:
 *     summary: Eliminar un empleado
 *     tags: [Empleados]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del empleado
 *     responses:
 *       200:
 *         description: Empleado eliminado
 *       404:
 *         description: Empleado no encontrado
 */
router.delete('/:id', empleadoController.deleteEmpleado);

module.exports = router;