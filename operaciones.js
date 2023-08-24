// const fs = require('fs');

// registrar = (nombre,edad,tipo,color,enfermedad) => {
//     let citas=require('./citas.json');
//     citas.push({nombre,edad,tipo,color,enfermedad});
//     fs.writeFileSync('./citas.json',JSON.stringify(citas),'utf-8');
//     console.log('mascota inseratada con exito',citas);
// }

// leer=()=>{
//     const citas=require('./citas.json');
//     console.log('Citas registradas...',citas);
// }

//mongoose

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/vet', {useNewUrlParser: true, useUnifiedTopology: true});
const citaSchema=new mongoose.Schema({
    nombre:String,
    edad:String,
    tipo:String,
    color:String,
    enfermedad:String
});
const Cita=mongoose.model('Cita',citaSchema);

registrar =  async (nombre,edad,tipo,color,enfermedad) => {
    const cita=new Cita({nombre,edad,tipo,color,enfermedad});
    try {
        await cita.save()
        console.log('mascota inseratada con exito',cita);
    } catch (error) {
        console.log(error);
    }
}
leer = async () => {
    try {
        let citas=await Cita.find();
        console.log('Citas registradas...',citas);
    } catch (error) {
        console.log(error);
    }
}
module.exports={registrar,leer}
//exports.module = {registrar}