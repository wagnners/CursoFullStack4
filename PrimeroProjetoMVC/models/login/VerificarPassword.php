<?php 

/**
 * 
 */
class VerificarPassword
{
	private $pdoQuery;

	function __construct()
	{
		
		$this->pdoQuery = new PDOQuery;
	}

	public function verificar($email, $password){

		var $password = sha1($password);

		$data = $this->pdoQuery->fetchAll("SELECT * FROM usuario WHERE email = '$email' AND password = '$password'");

		if(count($data) > 0){

			return true;

		}else{
			 return false;
		}
		
	}
}