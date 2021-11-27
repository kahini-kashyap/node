const bcrypt = require("bcrypt");

async function hash(password){
    const hash = await bcrypt.hash(password, 10);
    console.log(hash);
}

hash("abcdefg")