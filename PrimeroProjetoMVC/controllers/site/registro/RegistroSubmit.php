<?php 

class RegistroSubmit extends Controller{

	public function enviar(){

		$valores = $_POST;

		$registroCrud  = new RegistroCRUD;
		$usuario_id    = $registroCrud->inserir($valores);

		if($usuario_id){

			echo json_encode(array(
				'resultado' => true,
				'id'		=> $usuario_id,
				'msg'  		=> "Usuário Salvo com Sucesso!",
				'status'	=> "success"
			));

		}else{

			echo json_encode(array(
				'resultado' => false,
				'msg'  		=> "Erro ao adicionar usuário!",
				'status'	=> "error"
			));

		}
	}

}