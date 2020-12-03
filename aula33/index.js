const express = require("express");
const app = express();
const usuario = require("./models/usuario");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");

// template engine
app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/formulario", function(req, res){
    res.render("formulario");
});

app.post("/usuarios", function(req, res){
    // usuario.create({ nome: req.body.nome, sobrenome: req.body.sobrenome });
    usuario.create(req.body).then(function(usuario_data){
        console.log(usuario_data.id);
        res.send("Nome: " + req.body.nome + "<br>Sobrenome: " + req.body.sobrenome);
    }).catch(function(error){
        res.send(error);
    })

});

app.delete("/usuarios", function(req, res){

});

app.get("/usuarios/:order", function(req, res){

    usuario.findAll({order: [[req.params.order, 'ASC']]}).then(function(usuarios){
        console.log(usuarios);

        let conteudo = "";

        if(usuarios){
            usuarios.map(usuario => {
                conteudo = conteudo + `<h2>${usuario.id} - ${usuario.nome} ${usuario.sobrenome}</h2>`;
            })
        }

        res.send(conteudo);
        
    });

});


app.get("/usuarios", function(req, res){

    usuario.findAll().then(function(usuarios){
        res.render("usuarios", {usuarios : usuarios})

    });

});

app.listen(8082, function(){
    console.log("Servidor está rodando na porta 8082");
})

// app.get("/", function(req, res){
//     res.sendFile(__dirname + "/index.html");
// });




