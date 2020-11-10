<?php 

/**
 * 
 */
class RegistroCRUD
{
	private $pdoCrud;

	function __construct()
	{
		
		$this->pdoCrud = new PDOCrud;
	}

	public function inserir($valores){

		$pdo = array(
			':nome'	 	=> $valores['nome'],
			':cpf' 		=> $valores['cpf'],
			':fone'	 	=> $valores['fone'],
			':email' 	=> $valores['email'],
			':senha'	=> sha1($valores['senha']),
		);

		$colunas = "nome, cpf, fone, email, password";
		$valores = ":nome, :cpf, :fone, :email, :senha";

		return $this->pdoCrud->insert("usuario", $colunas, $valores, $pdo);
	}
}