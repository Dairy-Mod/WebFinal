const Encargado = require('../models/encargado'); // Asegúrate de que la ruta sea correcta

class EncargadoService {
    async getAllEncargados() {
        return await Encargado.find();
    }

    async createEncargado(encargadoData) {
        const encargado = new Encargado({
            nombre: encargadoData.nombre,
            estudio: encargadoData.estudio,
            turno: encargadoData.turno
        });
        return await encargado.save();
    }

    async getEncargadoById(id) {
        return await Encargado.findOne({ id: id });
    }

    // Alias para getEncargadoById
    async findOne(id) {
        return await this.getEncargadoById(id);
    }

    async updateEncargado(id, encargadoData) {
        const encargado = await Encargado.findOne({ id: id });
        if (!encargado) {
            throw new Error('Encargado no encontrado');
        }
        encargado.nombre = encargadoData.nombre || encargado.nombre;
        encargado.estudio = encargadoData.estudio || encargado.estudio;
        encargado.turno = encargadoData.turno || encargado.turno;
        return await encargado.save();
    }

    async deleteEncargado(id) {
        const encargado = await Encargado.findOne({ id: id });
        if (!encargado) {
            throw new Error('Encargado no encontrado');
        }
        await Encargado.deleteOne({ id: id });
        return { message: 'Encargado eliminado' };
    }
}

module.exports = EncargadoService;