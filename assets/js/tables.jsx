class Table extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tableName: this.props.tableName,
      tableRows: this.props.tableData,
      tableColumns: this.props.tableColumns,
      editedCell: null
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
    console.log('key up');
    var rowID = $(e.target).closest('td').data('rowid');
    var colName = $(e.target).closest('td').data('colname');
    var newValue = e.target.value;
    this.setState({
      tableRows: this.state.tableRows.map((row)=>{
        if (row.id == rowID) {
          // console.log('if' , row);
          var modifiedRow = _.clone(row);
          modifiedRow[colName] = newValue;
          return modifiedRow;
          // console.log('if', row, rowID, colName, modifiedRow);
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
      console.log('data', data);
    }.bind(this), 'json');
  }

  handleStartEditingCell(e) {
    e.preventDefault();
    var rowID = $(e.target).closest('td').data('rowid');
    var colName = $(e.target).closest('td').data('colname');
    console.log('handleStartEditingCell', rowID, colName);
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
      console.log('data', data);
    }.bind(this), 'json');
  }

  /*
   [
    {id: "1", nb_people: "4", place: "8312 rue Foucher", time: "2017-05-01 19:00"}
   ]
  */

  render() {
    var i = 0;
    var j = 0;
    var k = 0;
    // console.log(this.state.tableRows);
    return (
      <div>
        <h2>{this.state.tableName}</h2>
        <table className="table">
          <thead>
            <tr>
              {this.state.tableColumns.map((column) => {
                i += 1;
                return <th key={i}>{column.name}</th>;
              })}
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
                    console.log(this.state.editedCell, col.name, row.id);
                    if (row[col.name] == null) {
                      return <span><input
                        type="text"
                        name={col.name}
                        onBlur={this.handleInputModified.bind(this)} /></span>;
                    } else if (this.state.editedCell != null && col.name == this.state.editedCell.colName && row.id == this.state.editedCell.rowID) {
                      console.log('hey');
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
