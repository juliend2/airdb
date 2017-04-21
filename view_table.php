<?php require_once './lib/db.php'; ?>
<?php include './inc/header.php'; ?>
<h1>Tables</h1>
<table>
<tr>
<?php
// print_r($db->get_fields($_GET['table']));
  foreach ($db->get_fields($_GET['table']) as $key => $value) {
    echo '<th>';
    echo $value->name. ' ('.$value->type.') ';
    echo '</th>';
  }
?>
</tr>
</table>
<?php include './inc/footer.php'; ?>
