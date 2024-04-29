
const WebSocket = require('ws');

// Create a new WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

// Event handler for connection establishment
wss.on('connection', function connection(ws) {
    console.log('A new client connected!');

    // Event handler for receiving messages
    ws.on('message', function incoming(message) {
        console.log('Received message:', message);

        // Echo the received message back to the client
        ws.send('server: ' + message);
    });

    // Event handler for connection termination
    ws.on('close', function close() {
        console.log('Client disconnected!');
    });
});
