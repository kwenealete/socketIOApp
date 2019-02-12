let socket = io();

        socket.on('connect', function ()  {
            console.log('Connected to server');

           socket.emit('createMessage', {
               from: 'Alete',
               text: 'Yep, that is cool by me.'
           });
        });

        socket.on('disconnect', function ()  {
            console.log('Disconnected from server');
        });

        socket.on('newMessage', function (message) {
            console.log('NewMessage', message);
        });