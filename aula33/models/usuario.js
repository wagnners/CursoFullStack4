const {Sequelize, sequelize} = require("../config/db");

const usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    }
});

module.exports = usuario;