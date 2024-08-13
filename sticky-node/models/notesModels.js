const mongoose = require('mongoose')

colorsData = {
    id: "color-purple",
    colorHeader: "#FED0FD",
    colorBody: "#FEE5FD",
    colorText: "#18181A"
}

const colorSchema = new mongoose.Schema({
    id: String,
    colorHeader: String,
    colorBody: String,
    colorText: String
})

const positionSchema = new mongoose.Schema({
    x: Number,
    y: Number,
})


const notesSchema = new mongoose.Schema({
    body: String,
    colors: colorSchema,
    position: positionSchema

});

const Notes = mongoose.model('notes', notesSchema);

module.exports = Notes