const reader = require("exif");
const fs = require("fs");

new reader({image:'img.jpeg'}, function(err, data){
    if(err){

        console.log(err);
    }
    else{
        console.log(data);
    }
})