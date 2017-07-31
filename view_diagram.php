<?php require_once './lib/db.php'; ?>
<?php include './inc/header.php'; ?>
<?php $diagram_name = $_GET['diagram']; ?>

<div id="container"></div>
<?php

$diagram_data = $db->get_diagram($diagram_name);
$sql = "
  SELECT *
  FROM airdb___nodes
  WHERE diagram_id = ".$diagram_data->diagram_id.";
";
// echo $sql;
$diagram_nodes = $db->get_query($sql);
foreach ($diagram_nodes as $node) {
  $node->table_rows = $db->get_values($node->table_name);
  $node->table_columns = $db->get_fields($node->table_name);
}
$all_tables = $db->get_tables();

?>
<script>
var nodes = <?php echo json_encode($diagram_nodes); ?>;
var allTables = <?php echo json_encode($all_tables); ?>;
$(function(){
  ReactDOM.render(React.createElement(window.Diagram, {
    id: <?php echo $diagram_data->diagram_id ?>,
    name: "<?php echo $diagram_name ?>",
    nodes: nodes,
    allTables: allTables
  }), $('#container')[0]);
});
</script>

<?php include './inc/footer.php'; ?>
