const express = require("express");
const app = express();
const ws = require("ws");
app.set("view engine", "ejs");
const wss = new ws.Server({ port: 5000 });


wss.on("connection", function (client) {
    console.log(wss.clients.size);
    if (wss.clients.size > 2) {
        let notification = { type: 1, message: "room is occupied by 2 players", status: 0 };
        client.send(JSON.stringify(notification));
    }
    else if (wss.clients.size == 1) {
        let notification = { type: 1, message: "waiting for second player", status: 0 };
        client.send(JSON.stringify(notification));
    }
    else if (wss.clients.size == 2) {
        wss.clients.forEach(function (player) {
            let notification = { type: 1, message: "second player joined, start the game", status: 1, };
            player.send(JSON.stringify(notification));
        })
    }

    client.onmessage = function(message){
        wss.clients.forEach(function (player) {
            if(player!=client){
            player.send(message.data);
        }
        })
    }

})

app.get("/", function (req, res) {
    res.render("index.ejs");
})

app.listen(3000, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("express server is running");
    }
})

