var http = require("http");
var soma = require("./soma");
var operacoes = require("./operacoes");

http.createServer(function (req, res) {
   res.writeHead(200, {"Content-Type": "text/html"});
   res.write("A soma de 7 + 13 e: " + soma(7, 13));
   res.write("<br>A soma de 7 + 7 e: " + operacoes.adicao(7, 7));
   res.write("<br>A subtracao de 20 - 10 e: " + operacoes.subtracao(20, 10));
   res.write("<br>A multiplicacao de 7 * 7 e: " + operacoes.multiplicacao(7, 7));
   res.write("<br>A divisao de 21 / 7 e: " + operacoes.divisao (21, 7));
   res.end();
}).listen(8081);