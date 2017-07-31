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
      'node_id'=> $id,
      'top'=>$_POST['top'],
      'left'=>$_POST['left'],
      'table_rows' => $db->get_values($_POST['table_name']),
      'table_columns' => $db->get_fields($_POST['table_name'])
    ]);
  } else {
    echo json_encode([
      'status'=> 'error',
      'message'=> "Couldn't save the node."
    ]);
  }
}

