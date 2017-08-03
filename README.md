# README

## TODO

* draw links between tables/views in Diagram mode
* add validation for integer type
* add validation for float type
* add validation for table/view names
* outil d'import de données d'un fichier CSV vers une table
* export view in readonly
* better error reporting when a view creation fails (don't see the PHP error stuff)
* (#view) reorder columns (for default view only)
* (#view) reorder rows (maybe swap IDs in a transaction, or add an __ordering hidden field that contains it)
* (#view) related rows (data type that allows to link to another field of another table) (always multiple; there's no point for has-one)
  * so that when we choose a foreign key, it's proposed among a set of values
  * use conventions. Like the name of the other table makes it link to the
    other id, and if in the other table there is a name field, that's what
    we'll see in the selectbox when choosing a record.otherwise we'll see the
    id
  * (#view) implement count on related rows for each row

## known issues

* when we blur on an empty datetime field, it doesn't work properly
* when focusing on a datetime field, it should auto-select the previous
  (current) value
