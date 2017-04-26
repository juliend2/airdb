<?php
require_once './lib/db.php';

if (isset($_POST) && isset($_GET['table'])) {
  $db->alter_table($_GET['table']);
  $db->add_column($_POST['name'], $_POST['type']);
  if ($db->end()) {
    echo json_encode([
      'status'=> 'success',
      'table'=> $_GET['table'],
      'data'=> $_POST['name']
    ]);
  } else {
    echo json_encode([
      'status'=> 'error',
      'message'=> "Couldn't save the column."
    ]);
  }
}
