<?php

class DB {

  private $_db;

  private $_sql;

  private $_tablename;

  public function __construct($db) {
    $this->_db = $db;
    $this->_sql = 'BEGIN;';
  }

  public function end() {
    $this->_sql .= 'COMMIT;';
    try {
      $this->_db->exec($this->_sql);
      return true;
    } catch (PDOException $e) {
      echo '<div class="error">';
      echo '<p>Message: <b>'.$e->getMessage() . '</b></p>';
      echo '<p>SQL: <code>'.$this->_sql.'</code></p>';
      echo '</div>';
      return false;
    }
  }

  public function create_table($tablename) {
    $this->_tablename = $tablename;
    $this->_sql .= 'CREATE TABLE IF NOT EXISTS '.$this->_tablename.' (id INTEGER PRIMARY KEY AUTOINCREMENT);';
  }

  public function add_field($field_name, $field_type) {
    $this->_sql .= 'ALTER TABLE '.$this->_tablename.' ADD COLUMN '.$field_name.' '.$field_type.';';
  }

  public function add_row($tablename, $row_data) {
    if ($row_data['id'] == '') {
      unset($row_data['id']);
    }
    $values = array_values($row_data);
    $keys = array_keys($row_data);
    $key_symbols = array_map(function($key){
      return ':'.$key;
    }, $keys);
    $sql = 'INSERT INTO '.$tablename.
      ' ('.implode(', ', $keys).') '.
      ' VALUES ('.
      implode(', ', $key_symbols).')';
    try {
      $stmt = $this->_db->prepare($sql);
    } catch (PDOException $e) {
      print_r($row_data);
      print_r($key_symbols);
      print_r($sql);
      die();
    }
    foreach ($key_symbols as $key=>$value) {
      $stmt->bindParam($value, $values[$key]);
    }
    return $stmt->execute();
  }

  public function modify_row($tablename, $row_data) {
    $id = $row_data['id'];
    unset($row_data['id']);
    $values = array_values($row_data);
    $keys = array_keys($row_data);
    $settings = [];
    $key_symbols = array_map(function($key){
      return ':'.$key;
    }, $keys);
    $settings = array_map(function($key){
      return "$key = :$key";
    }, $keys);
    $sql = 'UPDATE  '.$tablename.
           ' SET     '.implode(' , ', $settings).
           ' WHERE   '.$tablename.'.id = :id';
    try {
      $stmt = $this->_db->prepare($sql);
    } catch (PDOException $e) {
      print_r($row_data);
      print_r($key_symbols);
      print_r($sql);
      die();
    }
    foreach ($key_symbols as $key=>$value) {
      $stmt->bindParam($value, $values[$key]);
    }
    $stmt->bindParam(':id', $id);
    return $stmt->execute();
  }

  public function get_tables() {
    $query = $this->_db->query("SELECT name FROM sqlite_master WHERE type='table' AND name != 'sqlite_sequence'");
    return $query->fetchAll(PDO::FETCH_COLUMN, 0);
  }

  public function get_fields($tablename) {
    $query = $this->_db->query("PRAGMA table_info('".$tablename."')");
    return $query->fetchAll(PDO::FETCH_CLASS);
  }

  public function get_values($tablename) {
    $query = $this->_db->query("SELECT * FROM ".$tablename."");
    return $query->fetchAll(PDO::FETCH_CLASS);
  }

}
