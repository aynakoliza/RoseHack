import { WebSocketServer } from 'ws';

var port = process.env.PORT || 5500;

const wss = new WebSocketServer({ port: port });

console.log('Server online - port:', port);

wss.on('connection', ws => {
	ws.on('open', function() {
		console.log('New User')
        ws.emit('chat-message', 'Hello')
        ws.on('send-chat-message', message => {
            ws.broadcast.emit('chat-message', message)
        })
	});

	ws.on('message', function(message) {
		console.log('message received', message.toString());

        let filteredMessage = filterBadWords(message.toString());

        wss.clients.forEach(client => {
            client.send(filteredMessage);
        })
	});

    /* 
    how to show message that client has disconnected / left

    if keeping anonymous, https://firebase.google.com/docs/auth/web/anonymous-auth (need npm init firebase)
    
    */

});  

function filterBadWords(message) {
    let filteredMessage = '';
    if(message.substring(1, 5) === 'fuck') {
        filteredMessage = message.substring(0, 1) + '****' + message.substring(5);
    }else {
        return message;
    }
    return filteredMessage;
}






/* 














*/
