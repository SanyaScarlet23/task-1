//?CRUD sistemot: Create Read Update & Delete

const Akademija = require("../pkg/akademii/akademijaShema");


//? Za chitanje na site akademii, koristime getAll, vo app.js kje e get
exports.getAll = async(req,res)=>{
    try{
        let akademii = await Akademija.map();
        res.status(200).json({
            status: "success",
            data: {
                akademii,
            },
        });

    }catch(err){
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

//? Za chitanje na konkretna akademija, da ja izdvoime od databse so nejziniot id koj ni e vsushnost dodelen od samata baza _id: koristime getOne, vo app.js kje e get
exports.getOne = async(req,res)=>{
    try{
        const akademija = await Akademija.findById(req.params.id);
        res.status(200).json({
            status: "success",
            data:{
                akademija,
            },
        });

    }catch(err){
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

//? Sozdavanje na nova akademija, koristime create, vo app.js kje e post 
exports.create = async(req,res)=>{
    try{
        const newAkademija = await Akademija.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                akademija: newAkademija,
            },
        });

    }catch(err){
         res.status(500).json({
            status: "fail",
            message: err,
         });
    }
};

//? Za vrshenje izmenea vo nekoja akademija odnosno update koristime, vo app.js kje ni e patch
exports.update = async(req,res)=>{
    try{
        console.log(req.file);
        console.log(req.body);

        const akademija = await Akademija.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            status: "success",
            data: {
                akademija,
            },
        });

    }catch(err){
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

//? Za brishenje na akademija, koristime delete/ vo app.js kje ni e delete
exports.delete = async(req,res)=>{
    try{
        await Akademija.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: "success",
            data: null, 
        });
    }catch(err){
        res.status(404).json({
            status: "Error",
            message: err.message,
        });
    }
};