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

  public function create_view($view_name, $select_sql) {
    $sql = "CREATE VIEW $view_name AS $select_sql;";
    return $this->_db->exec($sql);
  }

  public function update_view($view_name, $sql) {
    $sql = "begin; DROP VIEW IF EXISTS $view_name; CREATE VIEW $view_name AS $sql; commit;";
    return $this->_db->exec($sql);
  }

  // just to set the table name
  public function alter_table($table_name) {
    $this->_tablename = $table_name;
  }

  public function add_column($field_name, $field_type) {
    $this->_sql .= 'ALTER TABLE '.$this->_tablename.' ADD COLUMN '.$field_name.' '.$field_type.';';
  }

  public function drop_table($table_name) {
    $this->_sql .= 'DROP TABLE '.$table_name.';';
  }

  public function drop_view($table_name) {
    $this->_sql .= 'DROP VIEW '.$table_name.';';
  }

  public function drop_column($table_name, $field_name) {
    try {
      $old_fields = $this->get_fields($table_name);
      $new_fields = array_filter($old_fields, function($f) use ($field_name) {
        return $f->name != $field_name;
      });
      $new_field_names = array_map(function($f){
        return $f->name;
      }, $new_fields);
      $describe_sql = "SELECT sql FROM sqlite_master WHERE name = '".$table_name."' ;";
      $stmt = $this->_db->query($describe_sql);
      $query = $stmt->fetch();
      $old_query = $query['sql'];
      // having the , at the beginning is critical, because otherwise, we cannot remove the very last field of the table:
      $new_query = preg_replace('/(, '.$field_name.' [^,\)]+)/', '', $old_query);
      $new_query = preg_replace('/('.$table_name.')/', $table_name.'__backup', $new_query);
      $this->_sql .= $new_query.';';
      $this->_sql .= 'INSERT INTO '.$table_name.'__backup SELECT '.implode(', ', $new_field_names).' FROM '.$table_name.';';
      $this->_sql .= 'DROP TABLE '.$table_name.';';
      $this->_sql .= 'ALTER TABLE '.$table_name.'__backup RENAME TO '.$table_name.';';
    } catch (PDOException $e) {
      print $e->getMessage();
      die;
    }
    return $query;
  }

  public function delete_row($table_name, $row_id) {
    $stmt = $this->_db->query('DELETE FROM '.$table_name.' WHERE id= :id ;');
    $stmt->bindParam(":id", $row_id);
    return $stmt->execute();
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
    // print_r($sql);
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

  public function modify_column($table_name, $field_name, $new_field_name) {
    try {
      $old_fields = $this->get_fields($table_name);
      $new_field_names = array_map(function($f) use ($field_name, $new_field_name) {
        return $f->name == $field_name ? $new_field_name : $f->name;
      }, $old_fields);
      // get the create table SQL:
      $describe_sql = "SELECT sql FROM sqlite_master WHERE name = '".$table_name."' ;";
      $stmt = $this->_db->query($describe_sql);
      $query = $stmt->fetch();
      $old_query = $query['sql'];
      // having the , at the beginning is critical, because otherwise, we cannot remove the very last field of the table:
      $new_query = preg_replace('/(, '.$field_name.') ([^,\)]+)/', ', '.$new_field_name.' \\2', $old_query);
      $new_query = preg_replace('/('.$table_name.')/', $table_name.'__backup', $new_query);
      $this->_sql .= $new_query.';';
      $this->_sql .= 'INSERT INTO '.$table_name.'__backup SELECT '.implode(', ', array_map(function($f){
        return $f->name;
      }, $old_fields)).' FROM '.$table_name.';';
      $this->_sql .= 'DROP TABLE '.$table_name.';';
      $this->_sql .= 'ALTER TABLE '.$table_name.'__backup RENAME TO '.$table_name.';';
    } catch (PDOException $e) {
      print $e->getMessage();
      die;
    }
    return $this->_sql;
  }

  public function get_tables() {
    $query = $this->_db->query("SELECT name FROM sqlite_master WHERE type='table' AND name != 'sqlite_sequence' ORDER BY name ASC");
    return $query->fetchAll(PDO::FETCH_COLUMN, 0);
  }

  public function get_views() {
    $query = $this->_db->query("SELECT name FROM sqlite_master WHERE type='view' AND name != 'sqlite_sequence' ORDER BY name ASC");
    return $query->fetchAll(PDO::FETCH_COLUMN, 0);
  }

  public function get_view_sql($view_name) {
    $describe_sql = "SELECT sql FROM sqlite_master WHERE name = '".$view_name."' ;";
    $stmt = $this->_db->query($describe_sql);
    $query = $stmt->fetch();
    $sql = $query['sql'];
    $SQLs = explode('AS', $sql, 2);
    $select = $SQLs[1];
    return $select;
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
