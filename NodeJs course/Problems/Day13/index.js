// Day 13 -> Praveen kumar
const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static(path.join(__dirname)))


wss.on('connection', (ws) => {
    console.log('connected to server')
    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
        ws.send(message);
    });

    ws.on("close", function close(){
        console.log("Client disconnected")
    })
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
