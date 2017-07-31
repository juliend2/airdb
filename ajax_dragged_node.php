<?php
require_once './lib/db.php';

if (isset($_POST) && isset($_POST['node_id'])) {
  $id = $db->update("
    UPDATE airdb___nodes
    SET left='".$_POST['left']."', top='".$_POST['top']."'
    WHERE id = '".$_POST['node_id']."';
  ");
  if ($db->end()) {
    echo json_encode([
      'status'=> 'success',
      'top'=>$_POST['top'],
      'left'=>$_POST['left']
    ]);
  } else {
    echo json_encode([
      'status'=> 'error',
      'message'=> "Couldn't update the node."
    ]);
  }
}

