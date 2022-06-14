const express = require("express");
const app = express();


app.set("view engine", "ejs"); //view engine: ferramenta para rodar nosso html, ejs: vamos usar o ejs para isso

app.get("/", function(req, res) { //res = response(resposta)
    res.render("index");
});

app.get("/sobre", function(req, res) {
    res.render("about");
})

app.listen(8080); //fica ouvindo uma porta, nesse caso 8080
console.log("Rodando");