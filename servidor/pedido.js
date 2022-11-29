const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const eschema = mongoose.Schema



const eschemapedido = new eschema({
    nombre: String,
    identidad: String,
    direccion: String,
    paquete: String,
    horario: String,
    direccion2: String,
    nombre2: String,
    identidad2: String,
    idpedido: String
})

const ModeloPedido = mongoose.model('pedidos', eschemapedido);
module.exports = router





router.post('/agregarpedido', (req, res) => {
    const nuevopedido = new ModeloPedido({
        nombre: req.body.nombre,
        identidad: req.body.identidad,
        direccion: req.body.direccion,
        paquete: req.body.paquete,
        horario: req.body.horario,
        direccion2: req.body.direccion2,
        nombre2: req.body.nombre2,
        identidad2: req.body.identidad2,
        idpedido: req.body.idpedido
    })
    nuevopedido.save(function(err){
        if(!err){
            res.send('Pedido agregado correctamente')
        }else{
            res.send(err)
        }
    })
})

//GET ALL USERS
router.get('/obtenerpedidos', (req, res) => {
    ModeloPedido.find({}, function(docs, err) {
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//GET ALL USERS DATA
router.post('/obtenerdatapedido', (req, res) => {
    ModeloPedido.find({idpedido:req.body.idpedido}, function(docs, err) {
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//UPDATE USER
router.post('/actualizapedido', (req, res) => {
    
    ModeloPedido.findOneAndUpdate({idpedido:req.body.idpedido}, {
        nombre: req.body.nombre,
        identidad: req.body.identidad,
        direccion: req.body.direccion,
        paquete: req.body.paquete,
        horario: req.body.horario,
        direccion2: req.body.direccion2,
        nombre2: req.body.nombre2,
        identidad2: req.body.identidad2
    }, (err) => {
        if(!err){
            res.send('Pedido actualizado correctamente')
        }else{
            res.send(err)
        }
    })
    
})

//DELETE USER
router.post('/borrarpedido', (req, res) => {
    
    ModeloPedido.findOneAndDelete({idpedido:req.body.idpedido}, (err) => {
        if(!err){
            res.send('Pedido borrado correctamente')
        }else{
            res.send(err)
        }
    })
    
})


