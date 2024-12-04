const Empleado = require('../models/empleado'); // Asegúrate de que la ruta sea correcta
const Departamento = require('../models/departamento'); // Asegúrate de que la ruta sea correcta

class EmpleadoService {
    async getAllEmpleados() {
        return await Empleado.find();
    }

    async createEmpleado(empleadoData) {
        const empleado = new Empleado({
            nombre: empleadoData.nombre,
            apellido: empleadoData.apellido,
            edad: empleadoData.edad,
            genero: empleadoData.genero,
            departamento1: empleadoData.departamento1,
            departamento2: empleadoData.departamento2,
            departamento3: empleadoData.departamento3
        });
        return await empleado.save();
    }

    async getEmpleadoById(id) {
        const empleado = await Empleado.findOne({ id: id });
        if (!empleado) {
            throw new Error('Empleado no encontrado');
        }

        const departamento1 = await Departamento.findOne({ id: empleado.departamento1 });
        const departamento2 = await Departamento.findOne({ id: empleado.departamento2 });
        const departamento3 = await Departamento.findOne({ id: empleado.departamento3 });

        return {
            id: empleado.id,
            nombre: empleado.nombre,
            apellido: empleado.apellido,
            edad: empleado.edad,
            genero: empleado.genero,
            departamento1: departamento1 ? { id: departamento1.id, nombre: departamento1.nombre } : null,
            departamento2: departamento2 ? { id: departamento2.id, nombre: departamento2.nombre } : null,
            departamento3: departamento3 ? { id: departamento3.id, nombre: departamento3.nombre } : null
        };
    }

    // Alias para getEmpleadoById
    async findOne(id) {
        return await this.getEmpleadoById(id);
    }

    async updateEmpleado(id, empleadoData) {
        const empleado = await Empleado.findOne({ id: id });
        if (!empleado) {
            throw new Error('Empleado no encontrado');
        }
        empleado.nombre = empleadoData.nombre || empleado.nombre;
        empleado.apellido = empleadoData.apellido || empleado.apellido;
        empleado.edad = empleadoData.edad || empleado.edad;
        empleado.genero = empleadoData.genero || empleado.genero;
        empleado.departamento1 = empleadoData.departamento1 || empleado.departamento1;
        empleado.departamento2 = empleadoData.departamento2 || empleado.departamento2;
        empleado.departamento3 = empleadoData.departamento3 || empleado.departamento3;
        return await empleado.save();
    }

    async deleteEmpleado(id) {
        const empleado = await Empleado.findOne({ id: id });
        if (!empleado) {
            throw new Error('Empleado no encontrado');
        }
        await Empleado.deleteOne({ id: id });
        return { message: 'Empleado eliminado' };
    }
}

module.exports = EmpleadoService;