<?php require_once './lib/db.php'; ?>
<?php
if (isset($_POST) && isset($_POST['view_name'])) {
  $success = $db->update_view($_POST['view_name'], $_POST['select_sql']);
  if ($success) {
    // header('Location: /?action=tables');
    $_SESSION['success'] = 'Successfully updated a view';
  }
}
?>
<?php include './inc/header.php'; ?>
<h1>Tables</h1>
<script>
<?php $tablename = $_GET['view']; ?>
var tableColumns = <?php echo json_encode($db->get_fields($tablename)); ?>;
var tableData = <?php echo json_encode($db->get_values($tablename)); ?>;

$(function(){
  ReactDOM.render(React.createElement(window.Table, {
    tableName: '<?php echo $tablename ?>',
    tableData: tableData,
    tableColumns: tableColumns
  }), $('#container')[0]);
});

</script>
<div id="container"></div>

<h2>Modify this view</h2>
<p><?php if (isset($_SESSION['success'])) { echo $_SESSION['success']; } ?></p>
<div>
<form method="post" action="" style="float: left; width: 50%;">
  <p><label for="viewname">View name:</label><br/><input type="text" name="view_name" id="viewname" value="<?php echo $_GET['view'] ?>" /></p>
  <p><label for="viewsql">View SQL:</label><br/><textarea name="select_sql" class="view-sql"><?php echo ltrim($db->get_view_sql($_GET['view'])); ?></textarea></p>
  <p><input type="submit" value="update"/></p>
</form>
</div>
<?php include './inc/footer.php'; ?>