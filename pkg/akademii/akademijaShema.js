// npm install mongoose
const mongoose =require("mongoose");

const akademijaSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    address: {
        type: String,
    },
});

const Akademija = mongoose.model("Akademija", akademijaSchema);
module.exports = Akademija;