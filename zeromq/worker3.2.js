const zmq = require('zeromq');
const sock = zmq.socket('pull');

run();

async function run() {
    await sock.connect('tcp://127.0.0.1:7000');
    console.log('Connected to the server');

    // Handle incoming messages asynchronously
    sock.on('message', (msg) => {
        console.log(`Received job ${msg.toString()}`);
    });
}

/* process.on('SIGINT', () => {
    console.log('Closing the socket');
    sock.close();
    process.exit();
}); */
