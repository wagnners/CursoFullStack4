<?php $url = $this->helpers['URLHelper']->getURL(); ?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Primeiro Projeto MVC</title>

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="assets/libs/bootstrap/bootstrap.css">
    <link rel="stylesheet" href="assets/libs/font-awesome/css/font-awesome.css">

    <!-- Custom styles for this template -->
    <link href="assets/css/cover.css" rel="stylesheet">
  </head>

  <body class="text-center">

  <div class="d-flex h-100 w-100 mx-auto flex-column">
      <header class="masthead mb-auto p-3">
        <div class="inner container ">
          <h3 class="masthead-brand">Logo</h3>
          <nav class="nav nav-masthead justify-content-center">
            <a class="nav-link" href="<?php echo $url; ?>/">Home</a>
            <a class="nav-link" href="#">Registro</a>
            <a class="nav-link active" ref="views/site/contato/index.php">Contato</a>
            <a class="nav-link" href="#">Login</a>
          </nav>
        </div>
      </header>

      <main role="main">
       
      </main>

      <footer class="text-center">

        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-5 mb-md-0 mb-lg-0 mb-xl-0">
              <h5>Menu</h5>
              <a href="page2.php">Home</a>
              <a href="page2.php">Registro</a>
              <a href="page2.php">Contato</a>
              <a href="page2.php">Login</a>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-5 mb-md-0 mb-lg-0 mb-xl-0">
              <h5>Informações</h5>
              <p>Fone: (49) 99999-9999</p>
              <p>Lages - SC</p>

            </div>
            <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <h5>Redes Sociais</h5>
              <div class="row">
                <div class="col-6">
                  <i class="fa fa-instagram float-right" aria-hidden="true"></i>
                </div>
                <div class="col-6">
                  <i class="fa fa-facebook float-left" aria-hidden="true"></i>
                </div>
                <div class="col-6">
                  <i class="fa fa-twitter float-right" aria-hidden="true"></i>
                </div>
                <div class="col-6">
                  <i class="fa fa-google-plus float-left" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>     
        </div>
      </footer>
    </div>

    <script type="text/javascript" src="assets/libs/jquery/jquery-3.5.1.js"></script>
    <script type="text/javascript" src="assets/libs/popper/popper.min.js"></script>
    <script type="text/javascript" src="assets/libs/bootstrap/bootstrap.min.js"></script>
    <script type="text/javascript" src="assets/js/site/site.js"></script>
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
<!--     <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script>window.jQuery || document.write('<script src="../../../../assets/js/vendor/jquery-slim.min.js"><\/script>')</script>
    <script src="../../../../assets/js/vendor/popper.min.js"></script>
    <script src="../../../../dist/js/bootstrap.min.js"></script> -->
  </body>
</html>
