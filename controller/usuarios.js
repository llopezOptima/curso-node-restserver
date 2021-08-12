
const { response, request } = require('express');

const usuariosGet = (req, res = response) => {

    const {q, nombre = "noName", apikey} = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey
    });
}

const usuariosPost = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.json({
        msg: 'get POST - controlador',
        nombre,
        edad
    })
}

const usuariosPut = (req, res = response) => {

    const {id} = req.params;

    res.json({
        msg: 'get PUT - controlador',
        id
    })
}

const usuariosPatch = (req, res = response) => {

    res.json({
        msg: 'get PATCH - controlador'
    })
}

const usuariosDelete = (req, res = response) => {

    res.json({
        msg: 'get DELETE - controlador'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPatch,
    usuariosPut,
    usuariosDelete
}