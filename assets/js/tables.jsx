class Table extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tableName: this.props.tableName,
      tableRows: this.props.tableData,
      tableColumns: this.props.tableColumns,
      editedCell: null,
      displayAddColumn: false,
      isView: this.props.isView
    };
  }

  handleAddRow(e) {
    e.preventDefault();
    var row = {};
    _.each(this.state.tableColumns, (col)=>{
      row[col.name] = col.dflt_value;
      if (col.name == 'id') {
        if (this.state.tableRows.length > 0) {
          row[col.name] = parseInt(this.state.tableRows[this.state.tableRows.length-1] ? this.state.tableRows[this.state.tableRows.length-1].id : 1, 10) + 1;
        } else {
          row[col.name] = 1;
        }
      }
    });
    this.setState({
      tableRows: this.state.tableRows.concat(row)
    }, () => {
      $.post('/?action=ajax_add_row&table='+this.state.tableName, {
        row: this.state.tableRows[this.state.tableRows.length-1]
      }, (data, textStatus) => {
        // console.log('data', data);
      }.bind(this), 'json');
    }.bind(this));
  }

  handleInputModified(e) {
    if (e.hasOwnProperty('target')) { // normal input
      var rowID = $(e.target).closest('td').data('rowid');
      var colName = $(e.target).closest('td').data('colname');
      var newValue = e.target.value;
    } else { // datetime input
      var rowID = this.state.currentRowID;
      var colName = this.state.currentColName;
      var newValue = e.format('YYYY-MM-DD HH:mm');
    }
    this.setState({
      tableRows: this.state.tableRows.map((row)=>{
        if (row.id == rowID) {
          var modifiedRow = _.clone(row);
          modifiedRow[colName] = newValue;
          return modifiedRow;
          // return row;
        } else {
          return row;
        }
      }),
      editedCell: null
    }, () => {
      $.post('/?action=ajax_edit_row&table='+this.state.tableName, {
        row: _.find(this.state.tableRows, (row)=>{
          return row.id == rowID;
        })
      }, (data, textStatus) => {
        // console.log('edit saved');
      }.bind(this), 'json');
    });
  }

  handleBooleanChange(e) {
    var rowID = $(e.target).closest('td').data('rowid');
    var colName = $(e.target).closest('td').data('colname');
    var newValue = (e.target.value == 'on' ? 1 : 0);
    var newValue = newValue ? 0 : 1; // invert
    if (!this.state.isView) {
      this.setState({
        tableRows: this.state.tableRows.map((row)=>{
          if (row.id == rowID) {
            var modifiedRow = _.clone(row);
            if (parseInt(modifiedRow[colName], 10) === newValue && typeof modifiedRow[colName] === 'string') {
              if (newValue == 1) {
                newValue = 0;
              } else {
                newValue = 1;
              }
            }
            modifiedRow[colName] = newValue;
            return modifiedRow;
          } else {
            return row;
          }
        }),
        editedCell: null
      }, () => {
        $.post('/?action=ajax_edit_row&table='+this.state.tableName, {
          row: _.find(this.state.tableRows, (row)=>{
            return row.id == rowID;
          })
        }, (data, textStatus) => {
          // console.log('edit saved');
        }.bind(this), 'json');
      });
    }
  }

  handleStartEditingCell(e) {
    e.preventDefault();
    var rowID = $(e.target).closest('td').data('rowid');
    var colName = $(e.target).closest('td').data('colname');
    this.setState({
      editedCell: {
        rowID: rowID,
        colName: colName
      }
    });
  }

  handleDisplayAddColumn(e) {
    e.preventDefault();
    this.setState({
      displayAddColumn: !this.state.displayAddColumn,
      newColumnName: ''
    }, ()=>{
      if (this.state.displayAddColumn) {
        this.refs.fieldname.focus();
      }
    }.bind(this));
  }

  handleAddColumn(e) {
    e.preventDefault();
    var columnName = $(e.target).find('#column_name').val();
    var columnType = $(e.target).find('#column_type').val();
    $.post('/?action=ajax_add_column&table='+this.state.tableName, {
      name: columnName,
      type: columnType
    }, (data, textStatus) => {
      var currentColumns = this.state.tableColumns;
      currentColumns.push({
        cid: currentColumns[currentColumns.length - 1].cid + 1,
        dflt_value: null,
        name: columnName,
        type: columnType,
        pk: '0',
        notnull: '0'
      });
      var newRows = _.map(this.state.tableRows, (row)=>{
        row[columnName] = '';
        return row;
      });
      this.setState({
        displayAddColumn: false,
        tableColumns: currentColumns,
        tableRows: newRows
      });
    }.bind(this), 'json');
  }

  handleRemoveColumn(e) {
    e.preventDefault();
    e.preventDefault();
    var columnName = $(e.target).data('colname');
    $.post('/?action=ajax_remove_column&table='+this.state.tableName, {
      name: columnName
    }, (data, textStatus) => {
      var newColumns = _.reject(this.state.tableColumns, (column)=>{
        return column.name == columnName;
      });
      var newRows = _.map(this.state.tableRows, (row)=>{
        delete row[columnName];
        return row;
      });
      this.setState({
        displayAddColumn: false,
        tableColumns: newColumns,
        tableRows: newRows
      });
    }.bind(this), 'json');
  }

  handleRemoveRow(e) {
    e.preventDefault();
    if (confirm('Are you sure?')) {
      var rowID = $(e.target).data('rowid');
      $.post('/?action=ajax_remove_row&table='+this.state.tableName, {
        row_id: rowID
      }, (data)=>{
        var newRows = _.reject(this.state.tableRows, (row)=>{
          return row.id == rowID;
        });
        this.setState({
          tableRows: newRows
        });
      }.bind(this), 'json');
    }
  }

  /*
   [
    {id: "1", nb_people: "4", place: "8312 rue Foucher", time: "2017-05-01 19:00"}
   ]
  */

  validateName(name) {
    if (/^\d/.test(name)) {
      return "The column name cannot start with a number.";
    } else if (/\W/.test(name)) {
      return "The column name can only contain letters, numbers and underscores.";
    } else {
      return false;
    }
  }

  validateInteger(integer) {
    if (/\D/.test(integer)) {
      return "An integer field can only only contain digits.";
    }
  }

  validateFloat(float) {
    if (/^\D/.test(float)) {
    }
  }

  handleNewColumnNameChange(e) {
    var value = e.target.value;
    this.setState({
      newColumnNameError: this.validateName(value)
    });
    this.setState({newColumnName: value});
  }

  render() {
    var j = 0;
    var k = 0;
    return (
      <div>
        <h2>{this.state.tableName}</h2>
        <table className="table">
          <thead>
            <tr onClick={()=>{/*console.log(this.state);*/}.bind(this)}>
              {_.map(this.state.tableColumns, (column, i) => {
                return <th key={i}>
                  {column.name}
                  { column.name == 'id' || this.state.isView ? <span></span> : <a href="#" data-colname={column.name} onClick={this.handleRemoveColumn.bind(this)}>✕</a> }
                  </th>;
              })}
              <th id="add-column-th">
                <a id="js-add-column" href="#" onClick={this.handleDisplayAddColumn.bind(this)}>Add a column</a>
                <div id="js-add-column-box" style={{display: this.state.displayAddColumn ? 'block' : 'none'}}>
                  <form action="#" method="post" onSubmit={this.handleAddColumn.bind(this)}>
                  <p>
                    <input
                      type="text"
                      id="column_name"
                      name="name"
                      onChange={this.handleNewColumnNameChange.bind(this)}
                      value={this.state.newColumnName}
                      ref='fieldname'
                      placeholder="Name of the column" />
                    <span className={((fields)=>{
                                      fields.push(this.state.newColumnNameError ? 'block' : 'hidden');
                                      return fields.join(' ');
                                    })(['error'])}>
                      {this.state.newColumnNameError}
                    </span>
                  </p>
                  <p>
                    <label htmlFor="column_type">Data Type:</label>
                    <select name="type" id="column_type">
                    {_.map(fieldTypes, (fieldType, index)=> {
                      return <option value={fieldType.slug} key={index}>{fieldType.name}</option>;
                    })}
                    </select>
                  </p>
                  <p>
                    <input type="submit" value="Add" />
                  </p>
                  </form>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.tableRows.map((row) => {
              j = 0;
              k += 1;
              return <tr key={k}>{this.state.tableColumns.map((col) => {
                j += 1;
                return <td key={j} data-rowid={row.id} data-colname={col.name}>{
                  ()=>{
                    if (
                      (row[col.name] == null || (this.state.editedCell != null && col.name == this.state.editedCell.colName && row.id == this.state.editedCell.rowID)) && col.type != 'bool'
                    ) {
                      // input field for adding first value to cell
                      return <span className={"datatype-"+ col.type}>{
                          (function(colType) {
                            switch (colType) {
                              case 'datetime':
                                return <Datetime
                                  inputProps={{
                                    name: col.name,
                                    'data-rowid': row.id,
                                    'data-colname': col.name
                                  }}
                                  onFocus={ (e)=>{ this.setState({currentRowID: row.id, currentColName: col.name})}.bind(this)}
                                  onBlur={this.handleInputModified.bind(this)} locale="fr-ca" />;
                              default:
                                return <input
                                  type="text"
                                  name={col.name}
                                  onBlur={this.handleInputModified.bind(this)}
                                  defaultValue={row && row.hasOwnProperty(col.name) ? row[col.name] : ''} />;
                            }
                          }.bind(this))(col.type)
                        }
                        </span>;

                    } else {
                      // display value
                      if (col.type == 'bool') {
                        return <input
                          type="checkbox"
                          name={col.name}
                          value={row[col.name] ? 'on' : 'off'}
                          checked={row[col.name] && parseInt(row[col.name], 10) > 0 }
                          onChange={this.handleBooleanChange.bind(this)}
                          disabled={this.state.isView}
                          />;
                      } else {
                        return <span className="data" onClick={this.handleStartEditingCell.bind(this)}>{row[col.name]}</span>;
                      }
                    }
                  }.bind(this)()
                }</td>;
              }.bind(this))}
              <td><a href="#" data-rowid={row.id} onClick={this.handleRemoveRow.bind(this)}>Delete</a></td>
              </tr>;
            }.bind(this))}
          </tbody>
        </table>
        {this.state.isView ?
          <span></span> :
          <a href="#" onClick={this.handleAddRow.bind(this)}>Add a Row</a>
        }
      </div>
    );
  }
}

window.Table = Table;
