const { CONNECTING } = require("ws");
const ws = require("ws");
const wss = new ws.Server({ port: 3000 });

wss.on("connection", function (socket) {
    socket.onmessage = function (message) {
        wss.clients.forEach(function (client) {
            if (client != socket) {
                client.send(message.data);
            }
        })
    }
})