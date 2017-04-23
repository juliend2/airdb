class Table extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tableRows: this.props.tableData,
      tableColumns: this.props.tableColumns
    };
  }

  handleAddRow(e) {
    e.preventDefault();
    var row = {};
    _.each(this.state.tableColumns, (col)=>{
      row[col.name] = col.dflt_value;
      // col.value = col.dflt_value;
      // console.log('each', col);
    });
    this.setState({
      tableRows: this.state.tableRows.concat(row)
    });
  }

  render() {
    var i = 0;
    var j = 0;
    var k = 0;
    console.log(this.state.tableRows);
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
                return <td key={j}><span>{row.value == null ? ' ' : row.value}</span></td>;
              })}</tr>;
            }.bind(this))}
          </tbody>
        </table>
        <a href="#" onClick={this.handleAddRow.bind(this)}>Add a Row</a>
      </div>
    );
  }
}

window.Table = Table;
