const pdf = require("pdf-parse");
const fs = require("fs");
var buffer = fs.readFileSync("./file.pdf");

pdf(buffer).then(function(data){
    console.log(data.metadata);
    console.log(data.info);
    console.log(data.numpages);
    console.log(data.text);
})