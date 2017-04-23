<?php

require_once './lib/db.php';

if (isset($_GET['table']) && isset($_POST['row'])) {

  $worked = $db->add_row($_GET['table'], $_POST['row']);
  if ($worked) {
    echo json_encode([
      'status'=> 'success',
      'table'=> $_GET['table'],
      'data'=> $_POST['row']
    ]);
  } else {
    echo json_encode([
      'status'=> 'error',
      'message'=> "Couldn't save the row."
    ]);
  }

}
