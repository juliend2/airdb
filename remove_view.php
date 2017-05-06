<?php
require_once './lib/db.php';

if (isset($_POST)) {
  $db->drop_view($_GET['table']);
  if ($db->end()) {
    $_SESSION['success'] = "Successfully dropped view ".$_GET['table'];
    $_SESSION['REAL_REFERER'] = $_SERVER['HTTP_REFERER'];
  } else {
    $_SESSION['failure'] = "Failed to drop the view ".$_GET['table'];
    $_SESSION['REAL_REFERER'] = $_SERVER['HTTP_REFERER'];
  }
  header('Location: '.$_SESSION['REAL_REFERER']);
}


