const DepartamentoService = require('../services/departamentoService');
const departamentoService = new DepartamentoService();

exports.getAllDepartamentos = async (req, res) => {
    try {
        const departamentos = await departamentoService.getAllDepartamentos();
        res.status(200).json(departamentos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createDepartamento = async (req, res) => {
    try {
        const newDepartamento = await departamentoService.createDepartamento(req.body);
        res.status(201).json(newDepartamento);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getDepartamentoById = async (req, res) => {
    try {
        const departamento = await departamentoService.getDepartamentoById(parseInt(req.params.id));
        if (!departamento) {
            return res.status(404).json({ message: 'Departamento no encontrado' });
        }
        res.status(200).json(departamento);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateDepartamento = async (req, res) => {
    try {
        const updatedDepartamento = await departamentoService.updateDepartamento(parseInt(req.params.id), req.body);
        if (!updatedDepartamento) {
            return res.status(404).json({ message: 'Departamento no encontrado' });
        }
        res.status(200).json(updatedDepartamento);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteDepartamento = async (req, res) => {
    try {
        const deletedDepartamento = await departamentoService.deleteDepartamento(parseInt(req.params.id));
        if (!deletedDepartamento) {
            return res.status(404).json({ message: 'Departamento no encontrado' });
        }
        res.status(200).json({ message: 'Departamento eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};