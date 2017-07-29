<?php require_once './lib/db.php'; ?>
<?php include './inc/header.php'; ?>
<?php $diagram = $_GET['diagram']; ?>
<h1>Diagram</h1>
<div id="container"></div>
<script src="/assets/js/tables.jsx" type="text/babel"></script>
<script src="/assets/js/diagram.jsx" type="text/babel"></script>
<script type="text/babel">
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

<?php include './inc/footer.php'; ?>
