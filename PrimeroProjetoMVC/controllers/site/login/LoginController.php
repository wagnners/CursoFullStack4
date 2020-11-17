<?php

/**
*
* Controller do site.
*
* @author Code Universe
*
**/
class LoginController extends Controller
{

	public function index()
	{	

		$this->setLayout('site/shared/layout.php');
		$this->view('site/login/index.php');

	}

	public function sair()
	{	
		$this->helpers['UserSession']->deleteUser();

		$this->setLayout('site/shared/layout.php');
		$this->view('site/login/index.php');

	}

	public function verificarEmail()
	{

		$email = $_POST['email'];

		$verificarEmail = new VerificarEmail;
		$resultado 		= $verificarEmail->verificar($email);

		echo json_encode(array(
			'resultado' => $resultado,
		));
	}

	public function verificarPassword()
	{

		$email 		= $_POST['email'];
		$password 	= $_POST['password'];

		$verificarPassword  = new VerificarPassword;
		$resultado 			= $verificarPassword->verificar($email, $password);
		
		echo json_encode(array(
			'resultado' => $resultado
		));
	}

}