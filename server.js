const express = require("express");
const app = express();


app.set("view engine", "ejs"); //view engine: ferramenta para rodar nosso html, ejs: vamos usar o ejs para isso

app.get("/", function(req, res) { //res = response(resposta)
    const items = [
        {
            title: "D",
            message: "esenvolver aplicações/serviços de forma fácil"
        },

        {
            title: "E",
            message: "JS usa JavaScript para renderizar html"
        },

        {
            title: "M",
            message: "uito fácil de usar "
        },

        {
            title: "A",
            message: "morzinho!"
        },

        {
            title: "I",
            message: "nstall ejs "
        },

        {
            title: "S",
            message: "intaxe simples"
        }
    ];

    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JavaScript";

    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    });
});

app.get("/sobre", function(req, res) {
    res.render("pages/about");
})

app.listen(8080); //fica ouvindo uma porta, nesse caso 8080
console.log("Rodando");