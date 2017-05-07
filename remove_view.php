<?php
require_once './lib/db.php';

if (isset($_POST)) {
  $db->drop_view($_GET['table']);
  if ($db->end()) {
    $_COOKIE['success'] = "Successfully dropped view ".$_GET['table'];
    $_COOKIE['REAL_REFERER'] = $_SERVER['HTTP_REFERER'];
  } else {
    $_COOKIE['failure'] = "Failed to drop the view ".$_GET['table'];
    $_COOKIE['REAL_REFERER'] = $_SERVER['HTTP_REFERER'];
  }
  header('Location: /?action=tables');
}


