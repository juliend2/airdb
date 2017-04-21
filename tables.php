<?php require_once './lib/db.php'; ?>
<?php include './inc/header.php'; ?>
<h1>Tables</h1>
<ul>
<?php
  foreach ($db->get_tables() as $key => $value) {
    echo '<li>';
    echo '<a href="/?action=view_table&table='.$value.'">'.$value.'</a>';
    echo '</li>';
  }
?>
</ul>
<?php include './inc/footer.php'; ?>
