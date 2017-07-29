<?php

include dirname(__FILE__).'/class.database.php';
include dirname(__FILE__).'/class.airdb.php';

try {
  /**************************************
   * Create databases and                *
   * open connections                    *
   **************************************/

  // Create (connect to) SQLite database in file
  $DB = new PDO('sqlite:persodb.sqlite3');

  // Set errormode to exceptions
  $DB->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $db = new AirDB($DB);
}
catch(PDOException $e) {
  // Print PDOException message
  echo $e->getMessage();
}
