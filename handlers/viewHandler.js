const Kurs = require("../pkg/kursevi/kursShema");
const Akademija = require("../pkg/akademii/akademijaShema");

//?Funkcija za listanje na kursevi/akademii
exports.kursView = async(req,res)=>{
    try{
        const kursevi = await Kurs.find();

        res.status(200).render("viewKurs", {
            status: "succes",
            kursevi,
        });
    }catch(err){
        res.status(500).send(err);
    }
};

exports.akademijaView = async(req,res)=>{
    try{
        const akademii = await Akademija.find();

        res.status(200).render("viewAkademija", {
            status: "succes",
            akademii,
        });
    }catch(err){
        res.status(500).send(err);
    }
};

//?Funkcija za kreiranje na kurs/akademija
exports.createKurs = async(req,res)=>{
    try{
        await Kurs.create(req.body);
        res.redirect("/viewKurs");
    }catch(err){
        res.status(500).send(err);
    }
};

exports.createAkademija = async(req,res)=>{
    try{
        await Akademija.create(req.body);
        res.redirect("/viewAkademija");
    }catch(err){
        res.status(500).send(err);
    }
};

//?Funkcija za da se brishta kursevite/akademiite
exports.deleteKurs = async(req,res)=>{
    try{
        console.log(req.params.id);
        const kursId = req.params.id;

        await Kurs.findByIdAndDelete(kursId);
        res.redirect("/viewKurs");
    }catch(err){
        res.status(500).send(err);
    }
};

exports.deleteAkademija = async(req,res)=>{
    try{
        console.log(req.params.id);
        const akademijaId = req.params.id;

        await Akademija.findByIdAndDelete(akademijaId);
        res.redirect("/viewAkademija");
    }catch(err){
        res.status(500).send(err);
    }
};

//?Funkcija da se gledaat kursevite/akdemiite kako i da mozhat istite da se menuvaat
exports.viewKursDetails = async(req,res)=>{
    try{
        const kurs = await Kurs.findById(req.params.id);
        console.log(kurs);
        if(!kurs){ 
            res.status(404).send("This kurs has not be found.");
        } else {
            res.status(200).render("kursDetails", {
                status: "success",
                kurs,
            });
        }
    }catch(err){
        res.status(500).send(err);
    }
};

exports.modifyKurs = async(req,res)=>{
    try{
        await Kurs.findByIdAndUpdate(req.params.id, req.body);
        res.redirect("/viewKurs" + req.params.id);

    }catch(err){
        res.status(500).send(err);
    }
};

exports.viewAkademijaDetails = async(req,res)=>{
    try{
        const akademija = await Akademija.findById(req.params.id);
        console.log(akademija);
        if(!akademija){ 
            res.status(404).send("This akademija has not be found.");
        } else {
            res.status(200).render("akademijaDetails", {
                status: "success",
                akademija,
            });
        }
    }catch(err){
        res.status(500).send(err);
    }
};

exports.modifyAkademija = async(req,res)=>{
    try{
        await Akademija.findByIdAndUpdate(req.params.id, req.body);
        res.redirect("/viewAkademija" + req.params.id);

    }catch(err){
        res.status(500).send(err);
    }
};