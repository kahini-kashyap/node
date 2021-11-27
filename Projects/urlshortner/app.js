const express = require("express");
const app = express();
const validurl = require("valid-url");
app.set("view engine","ejs");
app.use(express.json());
var longtoshort = {};
var shorttolong = {};

app.get("/", function(req, res){
    res.render("index.ejs");
})

app.post("/link/generate", function(req, res){
    var longurl = req.body.url;
    if(!validurl.isUri(longurl)){
        return res.json({shorturl: "enter correct url"});
    }
    if(longtoshort[longurl]){
        res.json({shorturl:longtoshort[longurl]})
    }
    else{
        var shorturl = generator();
        longtoshort[longurl] = shorturl;
        shorttolong[shorturl] = longurl;
        res.json({shorturl});
    }
})

app.get("/:shorturl", function(req, res){
    res.redirect(shorttolong[req.params.shorturl])
})

app.listen(5000, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("server is running");
    }
})

function generator(){
    var string = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,0,1,2,3,4,5,6,7,8,9";
    var chararray = string.split(",");
    var randomstring = "";
    for(let i = 0; i<6; i++){
        var index = Math.floor(Math.random()*36);
        randomstring+= chararray[index];
    }
    return randomstring;
}
