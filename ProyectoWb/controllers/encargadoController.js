const EncargadoService = require('../services/encargadoService');
const encargadoService = new EncargadoService();

exports.getAllEncargados = async (req, res) => {
    try {
        const encargados = await encargadoService.getAllEncargados();
        res.status(200).json(encargados);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createEncargado = async (req, res) => {
    try {
        const newEncargado = await encargadoService.createEncargado(req.body);
        res.status(201).json(newEncargado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getEncargadoById = async (req, res) => {
    try {
        const encargado = await encargadoService.getEncargadoById(parseInt(req.params.id));
        if (!encargado) {
            return res.status(404).json({ message: 'Encargado no encontrado' });
        }
        res.status(200).json(encargado);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateEncargado = async (req, res) => {
    try {
        const updatedEncargado = await encargadoService.updateEncargado(parseInt(req.params.id), req.body);
        if (!updatedEncargado) {
            return res.status(404).json({ message: 'Encargado no encontrado' });
        }
        res.status(200).json(updatedEncargado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteEncargado = async (req, res) => {
    try {
        const deletedEncargado = await encargadoService.deleteEncargado(parseInt(req.params.id));
        if (!deletedEncargado) {
            return res.status(404).json({ message: 'Encargado no encontrado' });
        }
        res.status(200).json({ message: 'Encargado eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};