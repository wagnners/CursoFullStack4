<?php

/**
*
* Controller das tarefas.
*
* @author Code Universe
*
**/
class TarefasController extends Controller
{

	public function index()
	{		

		if($this->helpers['UserSession']->get("id")){

			$usuario_id 	= $this->helpers['UserSession']->get("id");

			$tarefasData 	= new TerefasData;
			$tarefasData 	= $tarefasData->listar($usuario_id);

			$this->setLayout('sistema/shared/layout.php');
			$this->view('sistema/tarefas/index.php', array(
				'tarefas' => $tarefasData
			));

		}else{

			$this->setLayout('site/shared/layout.php');
			$this->view('site/error/index.php');

		}
		

	}

	public function add()
	{		

		if($this->helpers['UserSession']->get("id")){

			$this->setLayout('sistema/shared/layout.php');
			$this->view('sistema/tarefas/add.php');

		}else{

			$this->setLayout('site/shared/layout.php');
			$this->view('site/error/index.php');

		}
		

	}

	public function delete(){

	 	$tarefa_id = $_POST['id'];

	 	$tarefasCrud  = new TarefasCRUD;
		$tarefasCrud->delete($tarefa_id);

		echo json_encode(array(
			'retorno' => true
		));

	}

	public function editar(array $params){

		$id = isset($params[0]) ? $params[0] : null;

		if($id){

			$tarefaData 	= new TerefasData;
			$tarefaData 	= $tarefaData->getData($id);

			$this->setLayout('sistema/shared/layout.php');
			$this->view('sistema/tarefas/editar.php', array('tarefa' => $tarefaData ));

		}else{

			$this->setLayout('site/shared/layout.php');
			$this->view('site/error/index.php');

		}

	}

}