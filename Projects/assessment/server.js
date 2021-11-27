const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());
app.set("view engine", "ejs");
const cookieParser = require("cookie-parser");
const { nextTick } = require("process");
app.use(cookieParser());
const bcrypt = require("bcrypt");

app.get("/", function (req, res) {
    res.render("signin.ejs")
})

app.get("/signup", function (req, res) {
    res.render("signup.ejs");
})

app.get("/signin", function (req, res) {
    res.render("signin.ejs");
})

app.post("/signin1", async function (req, res) {
    var { email, password } = req.body;
    if (!email || !password) {
        return res.json({ message: "Please enter both of the required fields" });
    }
    else {
        fs.readFile("./users/" + email, async (error, data) => {
            if (error) {
                res.json({ message: "User not registered" });
            }
            else {
                let temp = await bcrypt.compare(password, data.toString());
                if (!temp) {
                    res.json({ message: "Incorrect password or ID" });
                }
                else {
                    res.cookie("signin", "successful");
                    res.json({ message: "Sign In successful" });
                }
                console.log(temp);
            }
        })
    }

})

function secret(req, res, next) {
    if (req.cookies.signin == "successful") {
        next();
    }
    else {
        res.redirect("/signin");
    }
}

app.get("/secret", secret, function (req, res) {
    res.render("secret.ejs");

})

app.post("/signup1", async function (req, res) {
    var { email, password } = req.body;
    var hash = await bcrypt.hash(password, 10);
    fs.writeFile("./users/" + email, hash, (error) => {
        if (error) {
            res.json({ message: "An error occurred in signing up" });
        }
        else {
            res.json({ message: "Sign up successful" });
        }
    })
})

app.listen(3000, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("server is running");
    }
})

