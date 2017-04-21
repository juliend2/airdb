<?php
require_once './lib/db.php';

if (isset($_POST) && isset($_POST['table_name'])) {
  $db->create_table($_POST['table_name']);
  for ($i=0; $i<count($_POST['field_names']); $i++) {
    $db->add_field($_POST['field_names'][$i], $_POST['field_types'][$i]);
  }
  if ($db->end()) {
    header('Location: /?action=tables');
  }
}
include './inc/header.php';
?>
<h1>Create a table</h1>
<form method="post" action="">
  <p><label for="tablename">Table name:</label><input type="text" name="table_name" id="tablename" /></p>
  <fieldset id="js-fields">
  </fieldset>
  <p><a href="#" id="js-add-field">Add a field</a></p>
  <p><input type="submit"/></p>
</form>
<?php include './inc/footer.php'; ?>
