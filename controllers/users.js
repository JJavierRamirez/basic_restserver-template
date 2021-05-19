const { response } = require('express');

const usersGet = (req, res = response) => {

    // localhost:8080/api/users?q=hola&nombre=javier&apikey=124567890&page=1&limit=0
    // const querys = req.query;
    const { q, nombre = "nombre por defecto", apikey, page, limit } = req.query;

    res.json({
        ok: true,
        msg: "get API - controller file",
        q, 
        nombre,
        apikey,
        page,
        limit
    });
}

const usersPost = (req, res) => {
    const body = req.body;
    res.status(201).json({
        ok: true,
        msg: "post API - controller file",
        content: body
    });
}

const usersPut = (req, res) => {
    const {id} = req.params;
    const {nombre, edad} = req.body;
    res.json({
        ok: true,
        msg: "put API - controller file",
        nombre,
        edad,
        id
    });
}

const usersPatch = (req, res) => {
    res.status(201).json({
        ok: true,
        msg: "patch API - controller file"
    });
}


module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersPatch
}