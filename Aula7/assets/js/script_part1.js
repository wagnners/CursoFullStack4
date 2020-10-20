var nomes = ["Maria", "Pedro", "Antonio", "José"];

// document.getElementsByClassName("array")[0].innerHTML = "Esse é um valor de um array: " + nomes[0];

// var pessoa = {
// 	nome 		 	: "Pedro",
// 	sobrenome	 	: "Silva",
// 	idade		 	: 50,
// 	imprimirNome 	: function(){ return pessoa.nome + " " + pessoa.sobrenome },
// 	atualizarIdade  : function(novaIdade){ pessoa.idade = novaIdade; return pessoa.idade }
// };

// document.getElementsByClassName("objeto")[0].innerHTML = "Esse é um valor de um objeto: " + pessoa.atualizarIdade(40);

function soma(valor1, valor2){

	return valor1 + valor2;
}

function escolherDia(){

	var dia = "";

	switch(new Date().getDay()){
		case 0:
			dia = "Domingo";
			break;
		case 1: 
			dia = "Segunda";
			break;
		case 2: 
			dia = "Terça";
			break;
		case 3: 
			dia = "Quarta";
			break;
		case 4: 
			dia = "Quinta";
			break;
		case 5: 
			dia = "Sexta";
			break;
		case 6: 
			dia = "Sábado";
			break;
		default:
			dia = "Inválido";
			break;
	}

	return dia;
	
}

function imprimirPessoasFor(){

	for(i = 0; i < nomes.length; i++ ){
		console.log(nomes[i]);
	}

}

function imprimirPessoasWhile(){

	var i = 0;

	while(i < nomes.length){
		console.log(nomes[i]);
		i++;
	}

}

function imprimirWhile(){

	var i = 1;
	var text = "";

	while(i <= 10){
		text += "O número é: " + i + "<br>";
		i++;
	}

	document.getElementById("while").innerHTML = text;
	
}
