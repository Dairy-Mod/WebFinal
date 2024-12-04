const Departamento = require('../models/departamento'); // Asegúrate de que la ruta sea correcta
const Encargado = require('../models/encargado'); // Asegúrate de que la ruta sea correcta
const Area = require('../models/area'); // Asegúrate de que la ruta sea correcta

class DepartamentoService {
    async getAllDepartamentos() {
        return await Departamento.find();
    }

    async createDepartamento(departamentoData) {
        const departamento = new Departamento({
            nombre: departamentoData.nombre,
            encargado: departamentoData.encargado,
            area: departamentoData.area
        });
        return await departamento.save();
    }

    async getDepartamentoById(id) {
        const departamento = await Departamento.findOne({ id: id });
        if (!departamento) {
            throw new Error('Departamento no encontrado');
        }

        const encargado = await Encargado.findOne({ id: departamento.encargado });
        const area = await Area.findOne({ id: departamento.area });

        return {
            id: departamento.id,
            nombre: departamento.nombre,
            encargado: encargado ? { id: encargado.id, nombre: encargado.nombre } : null,
            area: area ? { id: area.id, nombre: area.nombre } : null
        };
    }

    // Alias para getDepartamentoById
    async findOne(id) {
        return await this.getDepartamentoById(id);
    }

    async updateDepartamento(id, departamentoData) {
        const departamento = await Departamento.findOne({ id: id });
        if (!departamento) {
            throw new Error('Departamento no encontrado');
        }
        departamento.nombre = departamentoData.nombre || departamento.nombre;
        departamento.encargado = departamentoData.encargado || departamento.encargado;
        departamento.area = departamentoData.area || departamento.area;
        return await departamento.save();
    }

    async deleteDepartamento(id) {
        const departamento = await Departamento.findOne({ id: id });
        if (!departamento) {
            throw new Error('Departamento no encontrado');
        }
        await Departamento.deleteOne({ id: id });
        return { message: 'Departamento eliminado' };
    }
}

module.exports = DepartamentoService;