const bcrypt = require("bcrypt");

async function hash(password) {

    let hash = await bcrypt.hash(password, 10);
    console.log(hash);
}

hash("password2");