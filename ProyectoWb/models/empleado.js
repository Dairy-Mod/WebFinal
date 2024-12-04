const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const EmpleadoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
        required: true,
    },
    genero: {
        type: String,
        required: true,
    },
    departamento1: {
        type: Number,
        required: true,
    },
    departamento2: {
        type: Number,
        required: true,
    },
    departamento3: {
        type: Number,
        required: true,
    }
}, { toJSON: { virtuals: true }, toObject: { virtuals: true } });

EmpleadoSchema.plugin(AutoIncrement, { inc_field: 'id', id: 'empleado_id_counter' });

EmpleadoSchema.set('toJSON', {
    transform: (doc, ret, options) => {
        ret.id = ret.id;
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});

module.exports = mongoose.models.Empleado || mongoose.model('Empleado', EmpleadoSchema);