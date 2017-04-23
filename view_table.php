<?php require_once './lib/db.php'; ?>
<?php include './inc/header.php'; ?>
<h1>Tables</h1>
<script>
<?php $tablename = $_GET['table']; ?>
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
<?php include './inc/footer.php'; ?>
