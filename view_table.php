<?php require_once './lib/db.php'; ?>
<?php include './inc/header.php'; ?>
<h1>Tables</h1>
<script>
var tableColumns = <?php echo json_encode($db->get_fields($_GET['table'])); ?>;
var tableData = <?php echo json_encode($db->get_values($_GET['table'])); ?>;

$(function(){
  ReactDOM.render(React.createElement(window.Table, {
    tableName: 'Joie',
    tableData: tableData,
    tableColumns: tableColumns
  }), $('#container')[0]);
});

</script>
<div id="container"></div>
<?php include './inc/footer.php'; ?>
