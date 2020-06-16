const express = require("express");
const nunjucks = require("nunjucks");
const app = express();


app.use(express.static("public"));
nunjucks.configure("src/views", {
     express: app,
     noCache: true
 
});



app.listen(4000);


app.get("/", (req, res) => {
    return res.render("index.html");
})

app.get("/conversor", (req, res) => {
     return res.render("index.html");
 })

