const express = require("express");
const app = express();


let abc = {name : "kahini"};
console.log(abc);

let cba = JSON.stringify(abc);
console.log(cba);