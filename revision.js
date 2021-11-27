// // var name = "kahini";
// let name = "kahini";
// let name = "ayush";


// var name = "I am Kahini Kashyap";
// var word = "am";

// if(name.includes(word)){
//         console.log("true")
//  }

// var index = name.indexOf(word);
// console.log(index);

// var updated = name.replace("Kahini", "Ayush");
// console.log(updated);

// var array = name.split(" ");
// console.log(array);

// for(let i = 0;i<array.length;i++){
//     if(array[i]==word){
//         console.log("true");
//     }
// }

// var a = [1,2,1,3,3,4,5,5];

// for(let i=0;i<a.length;i++){
//     for(let j = 0; j<a.length;j++){
//         if(a[i]==a[j] && i!=j){
//             console.log(a[i]);
//         }
//     }
// }

// function engine(oil){
//     console.log("this is the engine");
//     console.log("this engine runs on "+oil);
// }

// engine("c4h10");
// engine("kerosene");

// function letters(name){
//     console.log(name.length);
// }

// letters("kahini");

// function check(){
//     var sentence1 = document.getElementById("sentence1").value;
//     var sentence2 = document.getElementById("sentence2").value;
//     var boolean = include(sentence1, sentence2);
//     if(boolean == true){
//         alert("Yes, sentence1 contains sentence2");
//     }
//     else{
//         alert("No, sentence1 doesn't contains sentence2");
//     }
// }

// function include(sentence, sentence2){
//     if(sentence1.includes(sentence2)){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// // var name = "kahini";
// return name;
//Given a number, N. Find the sum of all the digits of N

// function sum(number){
//     let abc = toString(number.split(""));
    
// }

// function count(n){
//     var num1 = n.toString();
// }

// let number = 2;
// for(let i = 0; i<10;i++){
//    console.log(number*i);
// }

// var kahini = {name: "kahini", age: 13};
// kahini.name="ayush";
// console.log(kahini);
// kahini["class"] = 8;

// console.log(kahini.i);

// for(let i in kahini){
//     console.log(kahini[i]);
// }
// function one(){
//     console.log("one");
//     for(let i = 0; i<100; i++){
//         console.log(i);
//     }
// }

// function two(){
//     console.log("two");
// }

// function three(){
//     console.log("three");
// }

// // one();
// // two();
// // three(); //synchronous function

// one()
// setTimeout(two, 2000);
// three();

async function api(){
    let url = "https://jsonplaceholder.typicode.com/posts";
    let res = await fetch(url); 
    let res2 = await res.json();
    console.log(res2);
}

api();