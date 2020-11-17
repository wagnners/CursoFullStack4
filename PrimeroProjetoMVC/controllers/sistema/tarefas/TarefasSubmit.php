<?php 

class TarefasSubmit extends Controller{

	public function enviar(){

		$valores = $_POST;

		$tarefasCrud  	= new TarefasCRUD;
		$tarefa_id	 	= $tarefasCrud->salvar($valores);

		if($tarefa_id){

			echo json_encode(array(
				'resultado' => true,
				'id'		=> $tarefa_id,
				'msg'  		=> "Tarefa Salva com Sucesso!",
				'status'	=> "success"
			));

		}else{

			echo json_encode(array(
				'resultado' => false,
				'msg'  		=> "Erro ao adicionar tarefa!",
				'status'	=> "error"
			));

		}
	}

}