const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.get("/file", function (req, res) {
    var range = req.headers.range;
    if (!range) {
        res.status(400).send("Requires Range Header");
    }
    const audioPath = __dirname + "/video.mp4";
    const audioSize = fs.statSync("video.mp4").size;
    const Chunk = 20000;
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + Chunk, audioSize - 1);
    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${audioSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4"

    }
    res.writeHead(206, headers);
    const audioStream = fs.createReadStream(audioPath, { start, end });
    audioStream.pipe(res);
})

app.listen(3000, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("server is running");
    }
}
)