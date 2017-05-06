<?php
require_once './lib/db.php';

if (isset($_POST)) {
  $db->drop_table($_GET['table']);
  if ($db->end()) {
    $_SESSION['success'] = "Successfully dropped table ".$_GET['table'];
    $_SESSION['REAL_REFERER'] = $_SERVER['HTTP_REFERER'];
  } else {
    $_SESSION['failure'] = "Failed to drop the table ".$_GET['table'];
    $_SESSION['REAL_REFERER'] = $_SERVER['HTTP_REFERER'];
  }
  header('Location: '.$_SESSION['REAL_REFERER']);
}


