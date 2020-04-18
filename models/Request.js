const {Schema, model} = require('mongoose');

const RequestSchema = Schema({
    modalityID: {
        type: String,
        required: true
    },
    requesterID: {
        type: String,
        required: true
    },
    requestType: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,   ///En tramite, No aprobada, Aprobada.
        required: true       
    }, 
    created_date: {
        type: Date
    }         
},{
        timestamps: true
});

module.exports = model('Modality', RequestSchema);