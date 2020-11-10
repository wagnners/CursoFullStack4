<?php 

class ContatoSubmit extends Controller{

	public function enviar(){


		// $id         = 1; // Sumilação de recebimento de ID por ajax 
		$nome 		= filter_var($_POST["nome"]);
		$email 		= $_POST["email"];
		$fone 		= $_POST["fone"];
		$descricao 	= $_POST["mensagem"];

		// Chamada de método da classe ContatoCrud para atualizar
		// $contatoUpdate = new ContatoCrud;
		// $contatoUpdate->update($id, $nome, $email, $fone, $descricao);

		// Chamada de método da classe ContatoCrud para deletar
		// $contatoDelete = new ContatoCrud;
		// $contatoDelete->delete($id);

		// Chamada de método da classe ContatoData para listar todos
		// $listaDeContatos = new ContatoData;
		// $listaDeContatos = $listaDeContatos->listar();

		// Chamada de método da classe ContatoData para consultar contato de id igual a 2 
		// $contato = new ContatoData;
		// $contato = $contato->getContato(2);


		// Adicionando novo registro de contato na classe ContatoCrud
		$contatoCrud = new ContatoCrud;
		$contato_id  = $contatoCrud->save($nome, $email, $fone, $descricao);
		if($contato_id){

			echo json_encode(array(
				'resultado' => true,
				'id'		=> $contato_id,
				'msg'  		=> "Contato Salvo com Sucesso!",
				'status'	=> "success"
			));

		}else{

			echo json_encode(array(
				'resultado' => false,
				'msg'  		=> "Erro ao adicionar contato!",
				'status'	=> "error"
			));

		}

	}

}