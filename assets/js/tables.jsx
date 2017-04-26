class Table extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tableName: this.props.tableName,
      tableRows: this.props.tableData,
      tableColumns: this.props.tableColumns,
      editedCell: null,
      displayAddColumn: false
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
        }
      }
    });
    this.setState({
      tableRows: this.state.tableRows.concat(row)
    });
  }

  handleInputModified(e) {
    var rowID = $(e.target).closest('td').data('rowid');
    var colName = $(e.target).closest('td').data('colname');
    var newValue = e.target.value;
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
      })
    });
  }

  handleCreateRow(e) {
    e.preventDefault();
    $.post('/?action=ajax_add_row&table='+this.state.tableName, {
      row: this.state.tableRows[this.state.tableRows.length-1]
    }, (data, textStatus) => {
    }.bind(this), 'json');
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

  handleEditInputBlur(e) {
    var rowID = $(e.target).closest('td').data('rowid');
    $.post('/?action=ajax_edit_row&table='+this.state.tableName, {
      row: _.find(this.state.tableRows, (row)=>{
        return row.id == rowID;
      })
    }, (data, textStatus) => {
      this.setState({editedCell: null});
    }.bind(this), 'json');
  }

  handleDisplayAddColumn(e) {
    e.preventDefault();
    this.setState({
      displayAddColumn: !this.state.displayAddColumn
    });
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
    console.log('handleRemoveColumn');
    e.preventDefault();
    var columnName = $(e.target).data('colname');
    $.post('/?action=ajax_remove_column&table='+this.state.tableName, {
      name: columnName
    }, (data, textStatus) => {
      console.log(data, textStatus);
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

  /*
   [
    {id: "1", nb_people: "4", place: "8312 rue Foucher", time: "2017-05-01 19:00"}
   ]
  */

  render() {
    var j = 0;
    var k = 0;
    return (
      <div>
        <h2>{this.state.tableName}</h2>
        <table className="table">
          <thead>
            <tr onClick={()=>{console.log(this.state);}.bind(this)}>
              {_.map(this.state.tableColumns, (column, i) => {
                return <th key={i}>
                  {column.name}
                  <a href="#" data-colname={column.name} onClick={this.handleRemoveColumn.bind(this)}>✕</a>
                  </th>;
              })}
              <th id="add-column-th">
                <a id="js-add-column" href="#" onClick={this.handleDisplayAddColumn.bind(this)}>Add a column</a>
                <div id="js-add-column-box" style={{display: this.state.displayAddColumn ? 'block' : 'none'}}>
                  <form action="#" method="post" onSubmit={this.handleAddColumn.bind(this)}>
                  <p>
                    <input type="text" id="column_name" name="name" placeholder="Name of the column" />
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
                return <td key={j} data-rowid={row['id']} data-colname={col.name}>{
                  ()=>{
                    if (row[col.name] == null) {
                      return <span><input
                        type="text"
                        name={col.name}
                        onBlur={this.handleInputModified.bind(this)} /></span>;
                    } else if (this.state.editedCell != null && col.name == this.state.editedCell.colName && row.id == this.state.editedCell.rowID) {
                      return <span><input
                        type="text"
                        name={col.name}
                        onChange={this.handleInputModified.bind(this)}
                        onBlur={this.handleEditInputBlur.bind(this)}
                        value={row[col.name]} /></span>;
                    } else {
                      return <span className="data" onClick={this.handleStartEditingCell.bind(this)}>{row[col.name]}</span>;
                    }
                  }.bind(this)()
                }</td>;
              }.bind(this))}</tr>;
            }.bind(this))}
          </tbody>
        </table>
        <a href="#" onClick={this.handleAddRow.bind(this)}>Add a Row</a> | <a href="#" onClick={this.handleCreateRow.bind(this)}>Save the new row</a>
      </div>
    );
  }
}

window.Table = Table;
