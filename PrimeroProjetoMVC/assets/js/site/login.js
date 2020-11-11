/**
*
* Script de perfil
*
* @author Code Universe
*
**/
(function($, URL){

	function verificaSenha(){

		var resultado = false;

		$.ajax({
			url: URL + '/verificar/senha',
			type: 'POST',
			dataType: 'JSON',
			async: false,
			data: {
				email: $('#email').val(),
				password: $('#password').val(),
			},
			complete: function(response){

				resultado = response.responseJSON.resultado;

			}
		});

		return resultado;

	}


	function verificaEmailDB(){

		var resultado = false;

		$.ajax({
			url: URL + '/verificar/email',
			type: 'POST',
			dataType: 'JSON',
			async: false,
			data: {
				email: $('#email').val(),
			},
			complete: function(response){

				resultado = response.responseJSON.resultado;

			}
		});

		return resultado;

	}

	function login(){

		if(verificaEmailDB()){

			if(verificaSenha()){

				window.location = URL + "/dashboard";

			}else{

				$('.error').html("Senha incorreta.").fadeIn();
				
			}

		}else{
			// $('.error-email').css('display', 'block');
			$('.error').html("E-mail não existe.").fadeIn();
		}
	}

	$(document).ready(function() {

		$("#btn-login").click(function(){
			login();
		});
	});

})($, URL);