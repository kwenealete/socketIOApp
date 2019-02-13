let socket = io();

        socket.on('connect', function ()  {
            console.log('Connected to server');       
        });

        socket.on('disconnect', function ()  {
            console.log('Disconnected from server');
        });

        // Displaying message from server
        socket.on('newMessage', function (message) {
            console.log('NewMessage', message);
            let li = jQuery('<li></li>');
            li.text(`${message.from}: ${message.text}`)


            jQuery('#messages').append(li);
        });

    
        // DOM manipulation for the message form to message the client
        jQuery('#message-form').on('submit', function (e) {
            e.preventDefault();

            socket.emit('createMessage', {
                from: 'User',
                text: jQuery('[name=message]').val()
            }, function () {

            });
        });