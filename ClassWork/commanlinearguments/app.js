const fetch = require("cross-fetch");
let date = process.argv[2];
let month = process.argv[3];
let url = "https://history.muffinlabs.com/date/" + date + "/" + month;

fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function (res2) {
        console.log("Events:")
        for (let i = 0; i < res2.data.Events.length; i++) {
            console.log(`${res2.data.Events[i].year} : ${res2.data.Events[i].text}`)
        }

        console.log("Births")
        for (let i = 0; i < res2.data.Births.length; i++) {
            console.log(`${res2.data.Births[i].year} : ${res2.data.Births[i].text}`)
        }

        console.log("Deaths")
        for (let i = 0; i < res2.data.Deaths.length; i++) {
            console.log(`${res2.data.Deaths[i].year} : ${res2.data.Deaths[i].text}`)
        }
    });