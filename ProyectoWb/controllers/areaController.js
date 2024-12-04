const AreaService = require('../services/areaService');
const areaService = new AreaService();

exports.getAllAreas = async (req, res) => {
    try {
        const areas = await areaService.getAllAreas();
        res.status(200).json(areas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createArea = async (req, res) => {
    try {
        const newArea = await areaService.createArea(req.body);
        res.status(201).json(newArea);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAreaById = async (req, res) => {
    try {
        const area = await areaService.getAreaById(parseInt(req.params.id));
        if (!area) {
            return res.status(404).json({ message: 'Área no encontrada' });
        }
        res.status(200).json(area);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateArea = async (req, res) => {
    try {
        const updatedArea = await areaService.updateArea(parseInt(req.params.id), req.body);
        if (!updatedArea) {
            return res.status(404).json({ message: 'Área no encontrada' });
        }
        res.status(200).json(updatedArea);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteArea = async (req, res) => {
    try {
        const deletedArea = await areaService.deleteArea(parseInt(req.params.id));
        if (!deletedArea) {
            return res.status(404).json({ message: 'Área no encontrada' });
        }
        res.status(200).json({ message: 'Área eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};