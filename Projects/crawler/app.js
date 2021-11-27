const fetch = require("cross-fetch");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
//const url = "https://github.com/";


// fetch (url).then(function(res){
//     return res.text()
// }).then(function(html){
//     const $ = cheerio.load(html);
//     var abc =   $("a").map(function(i,link){
//     return link.attribs.href
//     }).get();
//     console.log(abc);
// })
var url = "https://www.netflix.com/browse";
function urlFilter(temp_url) {
    if (temp_url.indexOf('http') != -1) {
        return temp_url;
    }
    else {
        return url + temp_url;
    }
}

async function crawl(crawl_url) {
    let response = await fetch(crawl_url);
    let html = await response.text();
    const $ = cheerio.load(html)

    var all_image = $("img").map((i, image) => {
        return urlFilter(image.attribs.src);
    }).get()

    for (let i = 0; i < all_image.length; i++) {
        fetch(all_image[i]).then((response) => {
            var fileName = path.basename(all_image[i]);
            const dest = fs.createWriteStream("image/" + fileName)
            response.body.pipe(dest)
        })
    }

    var all_links = $("a").map((i, link) => {
        return urlFilter(link.attribs.href)
    }).get();
    console.log(all_image);
}
crawl(url);

