<?php 

    $con = mysqli_connect('localhost', 'root', '', 'pessoas_paises');

    $select = mysqli_query($con, 'SELECT * FROM pessoas');

    $response = array();

    while($data = mysqli_fetch_array($select)){
        array_push($response, $data);
    }

    echo json_encode(
        array(
            'retorno' =>  $response
        )
    );

?>