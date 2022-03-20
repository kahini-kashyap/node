


// var name1 = "ayush";

// async function printName() {
//     let promise = new Promise(function (onResolve, onReject) {
//         setTimeout(function () {
//             name1 = "kahini";
//             onResolve(name1);
//         }, 2000)
//     })
//     return promise;
// }

// var name = printName();
// name.then(function(data){
//     console.log(data);
// })

const fetch = require("cross-fetch");

let info = "";

async function getdatafromapicall(){
    let promise = new Promise(function(onResolve, onReject){
        let url = "https://history.muffinlabs.com/date/2/8";
        fetch(url).then(function(res){
            return (res.json());
        }).then(function(res2){
            onResolve(res2);
        })
    })
    return promise;
}
getdatafromapicall().then(function(res2){
    console.log(res2);
})


async function jsonapi(){
    let url = "https://jsonplaceholder.typicode.com/todos/1";
    let promise = new Promise(function(onResolve,onReject){
        fetch(url).then(function(res){
            return (res.json());
        }).then(function(res2){
            onResolve(res2);
        })
    })
    return promise;
}

jsonapi().then(function(res2){
    console.log(res2);
})