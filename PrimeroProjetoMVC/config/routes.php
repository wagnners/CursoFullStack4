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
	'/'   		=> 'HomeController/index',
	'contato'  	=> 'ContatoController/index',
	'registro'  => 'RegistroController/index',
	'login'		=> 'LoginController/index',
	'dashboard'	=> 'DashboardController/index',
);

// rotas POST
$commonPost = array(
	'enviar/contato' 	=> "ContatoSubmit/enviar",
	'enviar/usuario' 	=> "RegistroSubmit/enviar",
	'verificar/email'	=> "LoginController/verificarEmail",
	'verificar/senha'	=> "LoginController/verificarPassword",
);

$commonRoutes = array_merge($commonRoutes, $commonPost);

return $commonRoutes;