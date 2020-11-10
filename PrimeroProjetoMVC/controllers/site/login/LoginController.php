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

	public function verificarEmail()
	{

		$email = $_POST['email'];

		$verificarEmail = new VerificarEmail;
		$resultado 		= $verificarEmail->verificar($email);

		echo json_encode(array(
			'resultado' => $resultado
		));
	}

	public function verificarPassword()
	{

		$email = $_POST['email'];
		$email = $_POST['email'];

		// Chamada da classe e método na model de verificação de senha;

		echo json_encode(array(
			'resultado' => $resultado
		));
	}

}