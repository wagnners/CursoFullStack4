<?php 

class ContatoSubmit extends Controller{

	public function enviar(){


		$nome 		= $_POST["nome"];
		$email 		= $_POST["email"];
		$fone 		= $_POST["fone"];
		$descricao 	= $_POST["mensagem"];

		// Regra de Negócio 

		echo json_encode(array(
			'resultado' => true,
			'id'		=> 1,
			'data'		=> $_POST,
			'msg'  		=> "Erro ao adicionar contato!",
			'status'	=> "error"
		));

	}

}