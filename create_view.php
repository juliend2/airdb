<?php
require_once './lib/db.php';

if (isset($_POST) && isset($_POST['view_name'])) {
  $success = $db->create_view($_POST['view_name'], $_POST['select_sql']);
  if ($success) {
    header('Location: /?action=view_view&view='.$_POST['view_name']);
    $_SESSION['success'] = 'Successfully created a view';
  }
}
include './inc/header.php';
?>
<h1>Create a view</h1>
<p><?php if (isset($_SESSION['success'])) { echo $_SESSION['success']; } ?></p>
<div>
  <form method="post" action="" style="float: left; width: 50%;">
    <p><label for="viewname">View name:</label><br/><input type="text" name="view_name" id="viewname" /></p>
    <p><label for="viewsql">View SQL:</label><br/><textarea name="select_sql" class="view-sql"></textarea></p>
    <p><input type="submit" value="save"/></p>
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
