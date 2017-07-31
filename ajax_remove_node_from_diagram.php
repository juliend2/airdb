<?php
require_once './lib/db.php';

if (isset($_POST) && isset($_POST['node_id']) && isset($_POST['table_name'])) {
  $sql = "
    DELETE FROM airdb___nodes
    WHERE       id = ".$_POST['node_id']."
    ;
  ";
  // echo $sql; die;
  $success = $db->delete($sql);
  if ($success) {
    echo json_encode([
      'status'=> 'success',
      'table_name'=> $_POST['table_name'],
      'node'=> $_POST['node_id']
    ]);
  } else {
    echo json_encode([
      'status'=> 'error',
      'message'=> "Couldn't delete the node from this diagram."
    ]);
  }
}
