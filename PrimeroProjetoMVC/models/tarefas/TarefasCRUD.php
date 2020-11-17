<?php 

/**
 * 
 */
class TarefasCRUD
{
	private $pdoCrud;

	function __construct()
	{
		
		$this->pdoCrud = new PDOCrud;
	}

	public function salvar($valores){

		if(isset($valores['id'])){

			$this->update($valores);

			return $valores['id'];
			
		}else{

			return $this->inserir($valores);

		}
	}

	public function inserir($valores){

		$status;

		if(isset($valores['status'])){
			$status =  1;
		}else{
			$status = 0;
		}

		$userSession = new UserSession;
		$id 		 = $userSession->get("id");

		$pdo = array(
			':nome'	 		=> $valores['nome'],
			':descricao' 	=> $valores['descricao'],
			':status'		=> $status,
			':usuario_id'	=> $id ,
		);

		$colunas = "nome, descricao, status, date, usuario_id";
		$valores = ":nome, :descricao, :status, NOW(), :usuario_id";

		return $this->pdoCrud->insert("tarefas", $colunas, $valores, $pdo);
	}

	public function update($valores){

		$status;

		if(isset($valores['status'])){
			$status =  1;
		}else{
			$status = 0;
		}

		$pdo = array(
			':id'	 		=> $valores['id'],
			':nome'	 		=> $valores['nome'],
			':descricao' 	=> $valores['descricao'],
			':status'		=> $status,
		);

		$colunas = "nome=:nome, descricao=:descricao, status=:status";

		return $this->pdoCrud->update("tarefas", $colunas, "WHERE id = :id" ,$pdo);

	}

	public function delete($tarefa_id){

		return $this->pdoCrud->delete("tarefas", $tarefa_id);

	}
}