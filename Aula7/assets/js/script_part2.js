function validaFormulario(){

	var nome 		= document.forms["formulario"]["nome"].value;
	var sobrenome 	= document.forms["formulario"]["sobrenome"].value;
	var idade 		= document.forms["formulario"]["idade"].value;

	if(nome == ""){
		alert("Preencha o nome.");
	}else if(sobrenome == ""){
		alert("Preencha o sobrenome.");
	}else if(idade == ""){
		alert("Preencha a idade.");
	}else if(isNaN(idade)){
		alert("Idade inválida!");
	}else if(idade < 18){
		alert("Você precisa ser maior de 18 anos.");
	}else{
		alert("Cadastrado com Sucesso!");
	}
}