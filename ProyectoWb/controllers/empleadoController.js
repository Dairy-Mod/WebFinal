const EmpleadoService = require('../services/empleadoService');
const empleadoService = new EmpleadoService();

exports.getAllEmpleados = async (req, res) => {
    try {
        const empleados = await empleadoService.getAllEmpleados();
        res.status(200).json(empleados);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createEmpleado = async (req, res) => {
    try {
        const newEmpleado = await empleadoService.createEmpleado(req.body);
        res.status(201).json(newEmpleado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getEmpleadoById = async (req, res) => {
    try {
        const empleado = await empleadoService.getEmpleadoById(parseInt(req.params.id));
        if (!empleado) {
            return res.status(404).json({ message: 'Empleado no encontrado' });
        }
        res.status(200).json(empleado);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateEmpleado = async (req, res) => {
    try {
        const updatedEmpleado = await empleadoService.updateEmpleado(parseInt(req.params.id), req.body);
        if (!updatedEmpleado) {
            return res.status(404).json({ message: 'Empleado no encontrado' });
        }
        res.status(200).json(updatedEmpleado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteEmpleado = async (req, res) => {
    try {
        const deletedEmpleado = await empleadoService.deleteEmpleado(parseInt(req.params.id));
        if (!deletedEmpleado) {
            return res.status(404).json({ message: 'Empleado no encontrado' });
        }
        res.status(200).json({ message: 'Empleado eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};