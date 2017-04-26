<?php
require_once './lib/db.php';

if (isset($_POST) && isset($_GET['table'])) {
  // $db->alter_table($_GET['table']);
  $db->drop_column($_GET['table'], $_POST['name']);
  if ($db->end()) {
    echo json_encode([
      'status'=> 'success',
      'table'=> $_GET['table'],
      'data'=> $_POST['name']
    ]);
  } else {
    echo json_encode([
      'status'=> 'error',
      'message'=> "Couldn't remove the column."
    ]);
  }
}
