<?php require_once './lib/db.php'; ?>
<?php include './inc/header.php'; ?>
<?php $diagram_name = $_GET['diagram']; ?>

<div id="container"></div>
<script src="/assets/js/tables.jsx" type="text/babel"></script>
<script src="/assets/js/diagram.jsx" type="text/babel"></script>
<?php

$diagram_data = $db->get_diagram($diagram_name);
$diagram_nodes = $db->get_query("
  SELECT *
  FROM airdb___nodes
  WHERE diagram_id = ".$diagram_data->diagram_id.";
");
$all_tables = $db->get_tables();

?>
<script type="text/babel">
$(function(){
  ReactDOM.render(React.createElement(window.Diagram, {
    id: <?php echo $diagram_data->diagram_id ?>,
    name: "<?php echo $diagram_name ?>",
    nodes: <?php echo json_encode($diagram_nodes); ?>,
    allTables: <?php echo json_encode($all_tables); ?>
  }), $('#container')[0]);
});
</script>

<?php include './inc/footer.php'; ?>
