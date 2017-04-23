class Table extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tableName: this.props.tableName,
      tableRows: this.props.tableData,
      tableColumns: this.props.tableColumns
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

  handleInputBlur(e) {
    console.log('key up');
    var rowID = e.target.dataset.rowid;
    var colName = e.target.dataset.colname;
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
    // ajax POST to backend
    $.post('/?action=ajax_add_row&table='+this.state.tableName, {
      row: this.state.tableRows[this.state.tableRows.length-1]
    }, (data, textStatus) => {
      console.log('data', data);
    }.bind(this), 'json');
  }

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
                return <td key={j}><span>{
                  row[col.name] == null ?
                    <input
                      type="text"
                      name={col.name}
                      data-rowid={row['id']}
                      data-colname={col.name}
                      onBlur={this.handleInputBlur.bind(this)} /> :
                    row[col.name]
                }</span></td>;
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
