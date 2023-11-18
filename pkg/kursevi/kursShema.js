// npm install mongoose
const mongoose =require("mongoose");

const kursSchema = new mongoose.Schema({
    ime: {
        type: String,
    },
    adresa: {
        type: String,
    },
    oblast: {
        type: String,
    },
});

const Kurs = mongoose.model("Kurs", kursSchema);
module.exports = Kurs;