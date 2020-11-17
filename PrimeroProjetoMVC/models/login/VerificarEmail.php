<?php 

/**
 * 
 */
class VerificarEmail
{
	private $pdoQuery;

	function __construct()
	{
		
		$this->pdoQuery = new PDOQuery;
	}

	public function verificar($email){


		$data = $this->pdoQuery->fetchAll("SELECT * FROM usuario WHERE email = '$email'");

		if(count($data) > 0){

			return true;

		}else{
			return false;
		}
		
	}
}