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
<?php $tablename = $_GET['view']; ?>
<h1>Views</h1>
<div id="container"></div>
<script >
var tableColumns = <?php echo json_encode($db->get_fields($tablename)); ?>;
var tableData = <?php echo json_encode($db->get_values($tablename)); ?>;

$(function(){
  ReactDOM.render(React.createElement(window.Table, {
    tableName: '<?php echo $tablename ?>',
    tableData: tableData,
    tableColumns: tableColumns,
    isView: true
  }), $('#container')[0]);
});

</script>

<h2>Modify this view</h2>
<p><?php if (isset($_SESSION['success'])) { echo $_SESSION['success']; } ?></p>
<div >
  <form method="post" action="" style="float: left; width: 50%;">
    <p><label for="viewname">View name:</label><br/><input type="text" name="view_name" id="viewname" value="<?php echo $_GET['view'] ?>" /></p>
    <p><label for="viewsql">View SQL:</label><br/><textarea name="select_sql" class="view-sql"><?php echo ltrim($db->get_view_sql($_GET['view'])); ?></textarea></p>
    <p><input type="submit" value="update"/></p>
  </form>
  <div style="float: right; width: 50%; max-height: 600px; overflow-y: scroll;">
    <h3>Fields of other tables</h3>
    <dl>
    <?php foreach ($db->get_tables() as $key => $table_name): ?>
      <dt><a href="/?action=view_table&table=<?php echo $table_name ?>"><?php echo $table_name ?></a></dt>
      <dd>
        <?php echo implode(' , ', array_map(function($field){
          return '<b>'.$field->name.'</b> ('.$field->type.')';
        }, $db->get_fields($table_name))) ?>
      </dd>
    <?php endforeach; ?>
    </dl>
  </div>
</div>
<?php include './inc/footer.php'; ?>
