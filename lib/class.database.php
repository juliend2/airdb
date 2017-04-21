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

  public function get_tables() {
    $query = $this->_db->query("SELECT name FROM sqlite_master WHERE type='table' AND name != 'sqlite_sequence'");
    return $query->fetchAll(PDO::FETCH_COLUMN, 0);
  }

  public function get_fields($tablename) {
    $query = $this->_db->query("PRAGMA table_info('poulets')");
    return $query->fetchAll(PDO::FETCH_CLASS);
  }
}


