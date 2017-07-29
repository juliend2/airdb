<?php

require_once './lib/db.php';

$nodes_table = 'airdb___nodes';
$links_table = 'airdb___links';
$diagrams_table = 'airdb___diagrams';

// Prepare schema the first time we execute it:
if (!$db->table_exists($nodes_table) && !$db->table_exists($links_table)) {

  $db->create_table($diagrams_table);
  $db->add_column('name', 'text');

  $db->create_table($nodes_table);
  $db->add_column('name', 'text');
  $db->add_column('table_name', 'text');
  $db->add_column('diagram_id', 'integer');
  $db->add_column('left', 'integer');
  $db->add_column('top', 'integer');

  $db->create_table($links_table);
  $db->add_column('label', 'text');
  $db->add_column('from_table_name', 'text');
  $db->add_column('to_table_name', 'text');
  $db->add_column('line_type', 'text');

  if ($db->end()) {
    echo '<p>nodes table</p>';
    echo '<p>links table</p>';
    echo '<p>diagrams table</p>';
  }

}

include './inc/header.php';
?>

<h1>Diagrams</h1>
<a href="/create_diagram.php">Create a diagram</a>
<ul>
<?php foreach ($db->get_query('select * from airdb___diagrams') as $diagram): ?>
<li><?php echo $diagram->name ?></p>
<?php endforeach; ?>
</ul>
<?php include './inc/footer.php'; ?>
