<?php 

/**
 * 
 */
class VerificarPassword
{
	private $pdoQuery;
	private $userSession;

	function __construct()
	{
		
		$this->pdoQuery 	= new PDOQuery;
		$this->userSession 	= new UserSession;
	}

	public function verificar($email, $password){

		$password = sha1($password);

		$data = $this->pdoQuery->fetchAll("SELECT * FROM usuario WHERE email = '$email' AND password = '$password' LIMIT 1");

		if(count($data) > 0){

			$this->userSession->saveUser(array(
				'id'		=> $data[0]['id'],
				'nome' 		=> $data[0]['nome'],
				'email' 	=> $data[0]['email'],
				'password' 	=> $data[0]['password'],
			));

			return true;

		}else{

			return false;

		}
		
	}
}