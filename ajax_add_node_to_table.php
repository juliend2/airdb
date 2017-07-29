<?php
require_once './lib/db.php';

if (isset($_POST) && isset($_POST['diagram_id'])) {
  $id = $db->insert("
    INSERT INTO airdb___nodes
    (table_name, diagram_id, top, left)
    VALUES
    (
      '".$_POST['table_name']."',
      '".$_POST['diagram_id']."',
      '".$_POST['top']."',
      '".$_POST['left']."'
    )
  ");
  if ($db->end()) {
    echo json_encode([
      'status'=> 'success',
      'table_name'=> $_POST['table_name'],
      'diagram'=> $_POST['diagram_id'],
      'node_id'=> $id
    ]);
  } else {
    echo json_encode([
      'status'=> 'error',
      'message'=> "Couldn't save the node."
    ]);
  }
}

