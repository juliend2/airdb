<?php

require_once './lib/db.php';

if (isset($_POST) && isset($_POST['diagram_name'])) {
  $db->create_diagram($_POST['diagram_name']);
  $success = $db->end();
  if ($success) {
    header('Location: /?action=view_diagram&diagram='.$_POST['diagram_name']);
    $_SESSION['success'] = 'Successfully created a diagram';
  } else {
    print_r($db->errorInfo());
  }
}
include './inc/header.php';
?>
<h1>Create a diagram</h1>
<form method="post" action="">
  <p><label for="diagramname">Diagram name:</label><input type="text" name="diagram_name" id="diagramname" /></p>
  <p><input type="submit"/></p>
</form>
<?php include './inc/footer.php'; ?>

