const Mongoose = require('mongoose');
const DiagnosisSchema = new Mongoose.Schema({
    category: {
        type: String,
        required: [true, "Please provide a category!"],
    },
    diagnosis: {
        type: String,
        minlength: 3,
        required: [true, "Please provide a diagnosis!"],
    },
    patient: {
        type: String, 
        required: [true, "Please provide a patient name!"],
    },
    questions: {
        type: Array, 
        required: [true, "Please provide quiz questions!"],
        default: []
    },
    story: {
        type: String,
        required: [true, "Please provide a story!"],
        unique: true
    }
}, 
{
    timestamps: true
})

const Diagnosis = Mongoose.model("Diagnosis", DiagnosisSchema)
module.exports = Diagnosis  