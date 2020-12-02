const express = require("express");
const app = express();
const connection = require("./connection");

// app.get("/", function(req, res){
//     res.send("<h1>Seja bem vindo ao meu APP</h1>");
// });

// app.get("/sobre", function(req, res){
//     res.send("<h1>Página Sobre</h1>");
// });

// app.get("/aluno/:nome", function(req, res){
//     res.send("<h1>Bem vinda " + req.params.nome + "</h1>");
// });

// // Utilizando Template strings
// app.get("/aluno/:id/:nome/:sobrenome", function(req, res){
//     res.send(`<h1>Bem vinda ${req.params.id} - ${req.params.nome} ${req.params.sobrenome}</h1>`);
// });

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(8082, function(){
    console.log("Servidor está rodando na porta 8082");
})