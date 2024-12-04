const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const areaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    edificio: {
        type: String,
        required: true
    }
}, { toJSON: { virtuals: true }, toObject: { virtuals: true } });

areaSchema.plugin(AutoIncrement, { inc_field: 'id', id: 'area_id_counter' });

areaSchema.set('toJSON', {
    transform: (doc, ret, options) => {
        ret.id = ret.id;
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});

module.exports = mongoose.models.Area || mongoose.model('Area', areaSchema);