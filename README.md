# README

## TODO

* delete tables
* modify table name
* add validation for integer type
* add validation for float type
* add validation for table/view names
* export view in readonly
* in view creation/edition mode, we could choose a table/view to display its data to help us write a good query
* (#view) reorder columns (for default view only)
* (#view) reorder rows (maybe swap IDs in a transaction, or add an __ordering hidden field that contains it)
* (#view) related rows (data type that allows to link to another field of another table) (always multiple; there's no point for has-one)
  * (#view) implement count on related rows for each row

## known issues

* when we blur on an empty datetime field, it doesn't work properly
* when focusing on a datetime field, it should auto-select the previous
  (current) value
