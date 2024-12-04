const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const EncargadoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    estudio: {
        type: String,
        required: true,
    },
    turno: {
        type: String,
        required: true,
    }
}, { toJSON: { virtuals: true }, toObject: { virtuals: true } });

EncargadoSchema.plugin(AutoIncrement, { inc_field: 'id', id: 'encargado_id_counter' });

EncargadoSchema.set('toJSON', {
    transform: (doc, ret, options) => {
        ret.id = ret.id;
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});

module.exports = mongoose.models.Encargado || mongoose.model('Encargado', EncargadoSchema);