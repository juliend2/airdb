# README

## TODO

* add validation for integer type
* add validation for float type
* add validation for table/view names
* empty out the new column form after each addition
* reorder cells (for default view only)
* reorder rows (maybe swap IDs in a transaction, or add an __ordering hidden field that contains it)
* related rows (data type that allows to link to another field of another table) (always multiple; there's no point for has-one)
  * implement count on related rows for each row
* export view in readonly
* modify table name

## known issues

* when we blur on an empty datetime field, it doesn't work properly
* when focusing on a datetime field, it should auto-select the previous
  (current) value
