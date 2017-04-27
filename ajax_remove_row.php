<?php
require_once './lib/db.php';

if (isset($_POST) && isset($_GET['table'])) {
  $deleted = $db->delete_row($_GET['table'], $_POST['row_id']);
  if ($deleted) {
    echo json_encode([
      'status'=> 'success',
      'table'=> $_GET['table'],
      'data'=> $_POST['row_id']
    ]);
  } else {
    echo json_encode([
      'status'=> 'error',
      'message'=> "Couldn't delete the row."
    ]);
  }
}
