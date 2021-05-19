const express = require('express');
var cors = require('cors');


class Server{
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        //Middlewares
        this.middlewares();

        //Rutas de aplicacion

        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use( cors() );
        //Lectura y parseo de body
        this.app.use( express.json() );
        //Directorio publico
        this.app.use( express.static('public') );
    }

    routes(){
        //this.app.use('/api/users', require('../routes/user'));
        this.app.use(this.usersPath, require('../routes/user'));
    }

    listen(){ 
        this.app.listen(this.port, () => {
            console.log(`Rest Server listening at http://localhost:${this.port}`)
        })      
    }

}

module.exports = Server;