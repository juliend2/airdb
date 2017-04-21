<?php

include dirname(__FILE__).'/class.database.php';

try {
  /**************************************
   * Create databases and                *
   * open connections                    *
   **************************************/

  // Create (connect to) SQLite database in file
  $DB = new PDO('sqlite:persodb.sqlite3');
  // Set errormode to exceptions
  $DB->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  /**************************************
   * Create tables                       *
   **************************************/

  // Create table messages
  // $file_db->exec("CREATE TABLE IF NOT EXISTS messages (
  //   id INTEGER PRIMARY KEY, 
  //   title TEXT, 
  //   message TEXT, 
  //   time INTEGER)");

  /**************************************
   * Set initial data                    *
   **************************************/

  // Array with some test data to insert to database             
  // $messages = array(
  //   array('title' => 'Hello!',
  //   'message' => 'Just testing...',
  //   'time' => 1327301464),
  //   array('title' => 'Hello again!',
  //   'message' => 'More testing...',
  //   'time' => 1339428612),
  //   array('title' => 'Hi!',
  //   'message' => 'SQLite3 is cool...',
  //   'time' => 1327214268)
  // );


  /**************************************
   * Play with databases and tables      *
   **************************************/

  // Prepare INSERT statement to SQLite3 file db
  // $insert = "INSERT INTO messages (title, message, time) 
  //   VALUES (:title, :message, :time)";
  // $stmt = $file_db->prepare($insert);

  // Bind parameters to statement variables
  // $stmt->bindParam(':title', $title);
  // $stmt->bindParam(':message', $message);
  // $stmt->bindParam(':time', $time);

  // Loop thru all messages and execute prepared insert statement
  // foreach ($messages as $m) {
  //   // Set values to bound variables
  //   $title = $m['title'];
  //   $message = $m['message'];
  //   $time = $m['time'];

  //   // Execute statement
  //   $stmt->execute();
  // }

  // Prepare INSERT statement to SQLite3 memory db
  // $insert = "INSERT INTO messages (id, title, message, time) 
  //   VALUES (:id, :title, :message, :time)";

  // Select all data from file db messages table 
  // $result = $file_db->query('SELECT * FROM messages');

  // // Loop thru all data from messages table 
  // // and insert it to file db
  // foreach ($result as $m) {
  //   // Bind values directly to statement variables
  //   $stmt->bindValue(':id', $m['id'], SQLITE3_INTEGER);
  //   $stmt->bindValue(':title', $m['title'], SQLITE3_TEXT);
  //   $stmt->bindValue(':message', $m['message'], SQLITE3_TEXT);

  //   // Format unix time to timestamp
  //   $formatted_time = date('Y-m-d H:i:s', $m['time']);
  //   $stmt->bindValue(':time', $formatted_time, SQLITE3_TEXT);

  //   // Execute statement
  //   $stmt->execute();
  // }


  /**************************************
   * Drop tables                         *
   **************************************/

  // Drop table messages from file db
  // $file_db->exec("DROP TABLE messages");


  /**************************************
   * Close db connections                *
   **************************************/

  // Close file db connection
  // $file_db = null;
  $db = new DB($DB);
}
catch(PDOException $e) {
  // Print PDOException message
  echo $e->getMessage();
}
