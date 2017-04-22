<?php require_once './lib/db.php'; ?>
<?php include './inc/header.php'; ?>
<h1>Tables</h1>
<table>
<tr>
<?php
// print_r($db->get_fields($_GET['table']));
$columns = [];
  foreach ($db->get_fields($_GET['table']) as $key => $value) {
    echo '<th>';
    $columns[] = $value->name;
    echo $value->name. ' ('.$value->type.') ';
    echo '</th>';
  }
?>
</tr>
<?php
foreach ($db->get_values($_GET['table']) as $key => $value) {
  echo '<tr>';
  foreach ($columns as $col) {
    echo '<td>';
    echo $value->$col;
    echo '</td>';
  }
  echo '</tr>';
}
?>
</table>
<a href="#">Add a Row</a>
<?php include './inc/footer.php'; ?>
