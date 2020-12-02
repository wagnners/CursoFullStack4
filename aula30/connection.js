const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    "nodejs",
    "root",
    "",
    {
        host: "localhost",
        dialect: "mysql"
    }
);

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso");
}).catch(function(error){
    console.log("Não foi possível conectar. Erro: " + error);
})

const usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    }
})

// Rodar apenas uma vez (quando for para criar a tabela)
// usuario.sync({force: true});

// Rodar quando for criar novo usuario no banco 
// usuario.create({
//     nome: "Mario",
//     sobrenome: "Bros"
// })

// sequelize.query("SELECT * FROM usuarios WHERE id = 2", 
//     {type: sequelize.QueryTypes.SELECT}
// ).then(function(usuario){
//     console.log(usuario);
// })

// sequelize.query("UPDATE usuarios SET nome = 'Antonia' WHERE id = 5", 
//     {type: sequelize.QueryTypes.UPDATE}
// ).then(function(usuario){
//     console.log(usuario);
// })

// sequelize.query("UPDATE usuarios SET nome = 'Antonia', sobrenome = 'Ferreira' WHERE id = 5", 
//     {type: sequelize.QueryTypes.UPDATE}
// ).then(function(usuario){
//     console.log(usuario);
// })


sequelize.query("DELETE FROM usuarios WHERE id = 4",
    {type: sequelize.QueryTypes.DELETE}
)

sequelize.query("SELECT * FROM usuarios", 
    {type: sequelize.QueryTypes.SELECT}
).then(function(usuario){
    console.log(usuario);
})


