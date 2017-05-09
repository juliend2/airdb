<?php

require_once './lib/db.php';

if (isset($_GET['table']) && isset($_POST['column_name']) && isset($_POST['new_column_name'])) {

  // print_r($_GET);
  // print_r($_POST);
  // die;
  $db->modify_column($_GET['table'], $_POST['column_name'], $_POST['new_column_name']);
  if ($db->end()) {
    echo json_encode([
      'status'=> 'success',
      'table'=> $_GET['table'],
      'data'=> $_POST['new_column_name']
    ]);
  } else {
    echo json_encode([
      'status'=> 'error',
      'message'=> "Couldn't save the row."
    ]);
  }

}
