<?php
require_once './lib/db.php';

if (isset($_POST) && isset($_POST['table_name'])) {
  $deleted = $db->rename_table($_POST['old_table_name'], $_POST['table_name']);
  if ($db->end()) {
    echo json_encode([
      'status'=> 'success',
      'table_name'=> $_POST['table_name']
    ]);
  } else {
    echo json_encode([
      'status'=> 'error',
      'message'=> "Couldn't rename the table."
    ]);
  }
}

