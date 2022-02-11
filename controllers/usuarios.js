
 const { response } = require('express');
 
 
 const usuariosGet = (req, res = response) =>{

    const params = req.query; 

    res.json({
        msg: 'get API ',
    });
}

const usuariosPost = (req, res= response) =>{
    const { Nombre, Apellido } = req.body;

    res.json({
        msg: 'post API ',
        Nombre,
        Apellido
    });
}


const usuariosPut = (req, res= response) =>{
    
    const id = req.params.id;

    res.status(500).json({
        msg: 'put API ',
        id
    });
}


const usuariosPatch = (req, res= response) =>{
    res.json({
        msg: 'patch API ',
    })
}


const usuariosDelete = (req, res= response) =>{
    res.json({
        msg: 'delete API ',
    })
}



module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete
}






