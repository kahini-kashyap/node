const express = require("express");
const app = express();
app.set("view engine", "ejs",);
app.use(express.static(__dirname + "/public"));
let promotion = [{head1 : "Spootify", head2: "Enjoy your music!", link: "/signup"},{head1 : "Listen to any music of your choice!", head2: "You can make your own custom playlists, as well as listen to others playlists", link: "/learn"}, {head1 : "Premium Subscription", head2: "Get ad-free music, listen to songs together with ur friends, and more!", link: "/songs"}]
app.use(express.json());
let songs = [{name:"Michelle", artist:"Sir Chloe", url:"https://i.scdn.co/image/ab67616d0000b273f6ab3aa52a1b776a859c9ec7", play:"/music/song1"}, {name:"Runaway", artist:"Aurora", url:"https://lite-images-i.scdn.co/image/ab67616d00001e02d3a757231b119bacf68b3ec2", play:"/music/song2"},{name:"As the world caves in", artist:"Matt Maltese", url:"https://cdns-images.dzcdn.net/images/cover/b5edc55c7dd99af76f7901d29bfe5dab/500x500.jpg", play:"/music/song3"}, {name:"Brutal", artist:"Olivia Rodrigo", url:"https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a", play:"/music/song4"}, {name:"Violent", artist:"Carolesdaughter", url:"https://i1.wp.com/aonetwothreefour.co/wp-content/uploads/2020/11/artworks-RsL2H4krOJnczvZl-ceO9yg-original.jpg?w=696&ssl=1", play:"/music/song5"}]

app.get("/", function(req, res){
    res.render("index.ejs", {promotion, songs});
})

app.get("/admin", function(req, res){
    res.render("admin.ejs")
})

app.post("/update/promotion", function(req, res){
let {h1,h2,link,slide} = req.body;
if(parseInt(slide)>=3  || parseInt(slide)<0)
{
    res.json({message: "Enter Slide Number between 0-2"})
}
else
{
    let index = parseInt(slide)
    promotion[index].head1 =  h1;
    promotion[index].head2 =  h2;
    promotion[index].link =  link;
    res.json({message:"successfully updated"});
}
})

app.get("/player", function(req, res){
    res.render("music.ejs")
})

app.get("/music/:name", function(req, res){
    let song_name = req.params.name;

    res.sendFile(__dirname + "/songs/"+song_name+".mp3")
})

app.listen(3000, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("server is running");
    }
})