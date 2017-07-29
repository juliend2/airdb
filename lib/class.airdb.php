<?php

class AirDB extends DB {

  private $nodes_table = 'airdb___nodes';
  private $links_table = 'airdb___links';
  private $diagrams_table = 'airdb___diagrams';

  public function __construct($db) {
    parent::__construct($db);
  }

  public function setup_tables() {
    // Prepare schema the first time we execute it:
    if (!$this->table_exists($this->diagrams_table) && !$this->table_exists($this->nodes_table) && !$this->table_exists($this->links_table)) {

      $this->create_table($this->diagrams_table);
      $this->add_column('name', 'text');

      $this->create_table($this->nodes_table);
      $this->add_column('name', 'text');
      $this->add_column('table_name', 'text');
      $this->add_column('diagram_id', 'integer');
      $this->add_column('left', 'integer');
      $this->add_column('top', 'integer');

      $this->create_table($this->links_table);
      $this->add_column('label', 'text');
      $this->add_column('from_table_name', 'text');
      $this->add_column('to_table_name', 'text');
      $this->add_column('line_type', 'text');

      if ($this->_db->end()) {
        // echo '<p>nodes table</p>';
        // echo '<p>links table</p>';
        // echo '<p>diagrams table</p>';
      } else {
        echo '<div class="error">Couldn\'t setup the table for diagrams</div>';
      }
    }
  }

  public function create_diagram($diagramname) {
    $this->_sql .= "INSERT INTO airdb___diagrams (name) VALUES ('".$diagramname."');";
  }

  public function get_diagram($diagramname) {
    $sql = "
      SELECT  diagrams.id AS diagram_id,
              diagrams.name AS diagram_name --,
              -- nodes.id AS node_id,
              -- nodes.name AS node_name,
              -- nodes.table_name AS node_table_name,
              -- nodes.diagram_id AS node_diagram_id,
              -- nodes.left AS node_left,
              -- nodes.top AS node_top,
              -- links.id AS link_id,
              -- links.label AS link_label,
              -- links.from_table_name AS link_from_table_name,
              -- links.to_table_name AS link_to_table_name,
              -- links.line_type AS link_line_type
      FROM    ".$this->diagrams_table." AS diagrams
        -- LEFT JOIN  ".$this->nodes_table." AS nodes  ON nodes.diagram_id = diagrams.id
        -- LEFT JOIN  ".$this->links_table." AS links  ON links.from_table_name = '".$diagramname."'
                                                    -- OR links.to_table_name = '".$diagramname."'
      WHERE   diagrams.name = '".$diagramname."'
    ";
    // echo $sql;
    return $this->get_query($sql);
  }

}
