const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const DepartamentoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    encargado: {
        type: Number,
        required: true,
    },
    area: {
        type: Number,
        required: true,
    }
}, { toJSON: { virtuals: true }, toObject: { virtuals: true } });

DepartamentoSchema.plugin(AutoIncrement, { inc_field: 'id', id: 'departamento_id_counter' });

DepartamentoSchema.set('toJSON', {
    transform: (doc, ret, options) => {
        ret.id = ret.id;
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});

module.exports = mongoose.models.Departamento || mongoose.model('Departamento', DepartamentoSchema);