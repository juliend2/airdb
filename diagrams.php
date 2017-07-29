<?php

require_once './lib/db.php';

include './inc/header.php';
?>

<h1>Diagrams</h1>
<p>
  <a href="/create_diagram.php">Create a diagram</a>
</p>
<ul>
  <?php foreach ($db->get_query('select * from airdb___diagrams') as $diagram): ?>
    <li><a href="/?action=view_diagram&diagram=<?php echo $diagram->name ?>"><?php echo $diagram->name ?></a></p>
  <?php endforeach; ?>
</ul>
<?php include './inc/footer.php'; ?>
