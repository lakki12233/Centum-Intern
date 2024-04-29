const zmq = require("zeromq");

const sock = zmq.socket('push');
run();
async function run () {
    await sock.bind("tcp://127.0.0.1:7000");
    console.log("Server is listening on port 7000");
    console.log("press any key to start sending the jobs")
    process.stdin.once("data", send);
}

//sending the jobs to workers 
async function send () {
   console.log("about to send jobs");
   for(let i=0;i<100;i++){
     await sock.send(`sending job ${i}`);
     //500ms
     await new Promise(resolve => setTimeout(resolve, 500))
   }
}
