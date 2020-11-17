<?php $url = $this->helpers['URLHelper']->getURL(); ?>
<!DOCTYPE html>
<html>
<head>
	<title>Revisão</title>
	    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="<?php echo $url; ?>/assets/libs/bootstrap/bootstrap.css">

    <!-- Custom styles for this template -->
    <link href="<?php echo $url; ?>/assets/css/style.css" rel="stylesheet">
</head>
<body>
	<div class="text-center">
		
		<h1>Esse é um arquivo de revisão</h1>

		<h3>Layout</h3>

	</div>
	<div class="container">
		
		<?php require $file ?>
		<!-- conteúdo -->
	</div>
</body>
</html>