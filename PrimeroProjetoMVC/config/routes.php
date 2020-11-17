<?php

/**
*
* Definição das rotas e seus respectivos controllers e actions
*
* @author Code Universe
*
**/

// rotas normais
$commonRoutes = array(
	'/'   			 => 'HomeController/index',
	'contato'  		 => 'ContatoController/index',
	'registro'  	 => 'RegistroController/index',
	'login'			 => 'LoginController/index',
	'sair'			 => 'LoginController/sair',
	'dashboard'		 => 'DashboardController/index',
	'tarefas'		 => 'TarefasController/index',
	'tarefas/add'	 => 'TarefasController/add',
	'tarefas/editar' => 'TarefasController/editar',
);

// rotas POST
$commonPost = array(
	'enviar/contato' 	=> "ContatoSubmit/enviar",
	'enviar/usuario' 	=> "RegistroSubmit/enviar",
	'verificar/email'	=> "LoginController/verificarEmail",
	'verificar/senha'	=> "LoginController/verificarPassword",
	'enviar/tarefa'		=> "TarefasSubmit/enviar",
	'delete/tarefa'		=> "TarefasController/delete",
);

$commonRoutes = array_merge($commonRoutes, $commonPost);

return $commonRoutes;