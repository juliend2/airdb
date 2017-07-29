<?php require_once './lib/db.php'; ?>
<?php include './inc/header.php'; ?>
<h1>Tables</h1>
<div id="container"></div>
<script src="/assets/js/tables.jsx" type="text/babel"></script>
<script type="text/babel">
<?php $tablename = $_GET['table']; ?>
var tableColumns = <?php echo json_encode($db->get_fields($tablename)); ?>;
var tableRows = <?php echo json_encode($db->get_values($tablename)); ?>;

$(function(){
  ReactDOM.render(React.createElement(window.Table, {
    tableName: '<?php echo $tablename ?>',
    tableRows: tableRows,
    tableColumns: tableColumns,
    isView: false
  }), document.getElementById('container'));
});

</script>
<?php include './inc/footer.php'; ?>
