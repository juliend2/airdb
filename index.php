<?php // phpinfo();

// Set default timezone
date_default_timezone_set('UTC');

// stupid routing:
if (isset($_GET) && isset($_GET['action'])) {
  require './'.$_GET['action'].'.php';
} else {
  require './home.php';
}
