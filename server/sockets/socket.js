const { io } = require('../server');




io.on('connection', (client) => {

    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido al servidor'

    });



    client.on('disconnect', () => {
        console.log('Usuario Desconectado');
    });
    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);



        client.broadcast.emit('enviarMensaje', data);


        // if (mensaje.usuario) {
        //     callback({
        //         respuesta: 'Todo salio bien'

        //     });
        // } else {
        //     callback({
        //         respuesta: 'Todo salio mal!!!'

        //     });

        // }




    });


});