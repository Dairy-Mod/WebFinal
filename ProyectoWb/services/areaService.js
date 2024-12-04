const Area = require('../models/area'); // Asegúrate de que la ruta sea correcta

class AreaService {
    async getAllAreas() {
        return await Area.find();
    }

    async createArea(areaData) {
        const area = new Area({
            nombre: areaData.nombre,
            edificio: areaData.edificio
        });
        return await area.save();
    }

    async getAreaById(id) {
        return await Area.findOne({ id: id });
    }

    // Alias para getAreaById
    async findOne(id) {
        return await this.getAreaById(id);
    }

    async updateArea(id, areaData) {
        const area = await Area.findOne({ id: id });
        if (!area) {
            throw new Error('Área no encontrada');
        }
        area.nombre = areaData.nombre || area.nombre;
        area.edificio = areaData.edificio || area.edificio;
        return await area.save();
    }

    async deleteArea(id) {
        const area = await Area.findOne({ id: id });
        if (!area) {
            throw new Error('Área no encontrada');
        }
        await Area.deleteOne({ id: id });
        return { message: 'Área eliminada' };
    }
}

module.exports = AreaService;