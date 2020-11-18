<?php 

    $con = mysqli_connect('localhost', 'root', '', 'fullstack4');

    $select = mysqli_query($con, 'SELECT * FROM usuario');

    $response = array();

    $i = 0;

    while($data = mysqli_fetch_array($select)){
        array_push( $response, array(
            'nome' => $data['nome'],
            'email' => $data['email'],
        ));
    }

    echo json_encode(
        array(
            'retorno' =>  $response
        )
    );

?>