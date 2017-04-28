<?php
require_once './lib/db.php';

if (isset($_POST) && isset($_POST['view_name'])) {
  $success = $db->create_view($_POST['view_name'], $_POST['select_sql']);
  if ($success) {
    // header('Location: /?action=tables');
    $_SESSION['success'] = 'Successfully updated a view';
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
</div>

<?php include './inc/footer.php'; ?>
