//?CRUD sistemot: Create Read Update & Delete

const Kurs = require("../pkg/kursevi/kursShema");


//? Za chitanje na site kursevi, koristime getAll, vo app.js kje e get
exports.getAll = async(req,res)=>{
    try{
        let kursevi = await Kurs.map();
        res.status(200).json({
            status: "success",
            data: {
                kursevi,
            },
        });

    }catch(err){
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

//? Za chitanje na konkreten kurs, da ja izdvoime od databse so nejziniot id koj ni e vsushnost dodelen od samata baza _id: koristime getOne, vo app.js kje e get
exports.getOne = async(req,res)=>{
    try{
        const kurs = await Kurs.findById(req.params.id);
        res.status(200).json({
            status: "success",
            data:{
                announcement,
            },
        });

    }catch(err){
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

//? Sozdavanje na nov kurs, koristime create, vo app.js kje e post 
exports.create = async(req,res)=>{
    try{
        const newKurs = await Kurs.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                kurs: newKurs,
            },
        });

    }catch(err){
         res.status(500).json({
            status: "fail",
            message: err,
         });
    }
};

//? Za vrshenje izmenea vo nekoj kurs odnosno update koristime, vo app.js kje ni e patch
exports.update = async(req,res)=>{
    try{
        console.log(req.file);
        console.log(req.body);

        const kurs = await Kurs.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            status: "success",
            data: {
                kurs,
            },
        });

    }catch(err){
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

//? Za brishenje na kurs, koristime delete/ vo app.js kje ni e delete
exports.delete = async(req,res)=>{
    try{
        //!Tuka nema potreba od definiranje na konstanta bideji i taka kje go nema vo database 
        await Kurs.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: "success",
            data: null, //prazno e i taka nema shto da ochekuvame da ni se vrati zatoa za data vikame deka vrednost e null
        });
    }catch(err){
        res.status(404).json({
            status: "Error",
            message: err.message,
        });
    }
};