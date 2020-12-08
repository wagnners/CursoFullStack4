const express = require("express");
const app = express();
const usuario = require("./models/usuario");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
const helpers = require('handlebars-helpers')();

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

app.get("/atualizar/:id", function(req, res){
    usuario.findOne({ where: { id: req.params.id }}).then(function(usuario){
        if(usuario){
            res.render("usuario", {usuario : usuario})
        }else{
            res.render("mensagem", {mensagem : "Nenhum usuário encontrado!"});
        }
    }).catch(function(error){
        res.render("mensagem", {mensagem : error});
    })
});

app.post("/alterar", function(req, res){

    const { id, nome, sobrenome } = req.body;

    usuario.findOne({ where: { id: id }}).then(function(_usuario){
        
        _usuario.nome = nome;
        _usuario.sobrenome = sobrenome;

        _usuario.save().then(function(){
            // Mostrar mensagem
            // res.render("mensagem", {mensagem : "Usuário atualizado!"});

            //Mostrar Lista
            usuario.findAll().then(function(usuarios){
                res.render("usuarios", {usuarios : usuarios})
            });
        });

    });
    
});

app.get("/deletar/:id", function(req, res){
    usuario.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(){
        usuario.findAll().then(function(usuarios){
            res.render("usuarios", {usuarios : usuarios})
        });
      })
});

app.listen(8082, function(){
    console.log("Servidor está rodando na porta 8082");
})

// app.get("/", function(req, res){
//     res.sendFile(__dirname + "/index.html");
// });




