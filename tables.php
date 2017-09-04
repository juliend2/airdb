<?php require_once './lib/db.php'; ?>
<?php include './inc/header.php'; ?>
<?php if (isset($success)): ?>
  <div class="success"><?php echo $success ?></div>
<?php endif ?>
<?php if (isset($failure)): ?>
  <div class="failure"><?php echo $failure ?></div>
<?php endif ?>
<h1>Tables, Views & Diagrams</h1>
<h2>Tables <small>[<a href="/create_table.php">New</a>]</small></h2>
<ul>
<?php
  foreach ($db->get_tables() as $key => $value) {
    echo '<li><form method="post" action="/remove_table.php?table='.$value.'" onsubmit="return confirm(\'Are you sure?\')">';
    echo '<a href="/?action=view_table&table='.$value.'">'.$value.'</a>&nbsp;&nbsp;';
    echo '<button>Delete</button></form>';
    echo '</li>';
  }
?>
</ul>
<h2>Views <small>[<a href="/create_view.php">New</a>]</small></h2>
<ul>
<?php
  foreach ($db->get_views() as $key => $value) {
    echo '<li><form method="post" action="/remove_view.php?table='.$value.'" onsubmit="return confirm(\'Are you sure?\')">';
    echo '<a href="/?action=view_view&view='.$value.'">'.$value.'</a>&nbsp;&nbsp;';
    echo '<button>Delete</button></form>';
    echo '</li>';
  }
?>
</ul>
<H2>Diagrams <small>[<a href="/create_diagram.php">New</a>]</small></h2>
<ul>
  <?php foreach ($db->get_query('select * from airdb___diagrams') as $diagram): ?>
    <li><a href="/?action=view_diagram&diagram=<?php echo $diagram->name ?>"><?php echo $diagram->name ?></a></li>
  <?php endforeach; ?>
</ul>
<?php include './inc/footer.php'; ?>
