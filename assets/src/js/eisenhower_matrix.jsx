var React = require('react');
var _ = require('lodash');
const TableRow = require('./table_row.js').TableRow;

class MatrixItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      parent: this.props.parent,
      title: this.props.title,
      isImportant: this.props.isImportant,
      isUrgent: this.props.isUrgent,
      gistURL: this.props.gistURL,
      tableName: this.props.tableName,
      handleRemoveRow: this.props.handleRemoveRow,
      handleEditRow: this.props.handleEditRow
    };
  }

  handleRemove(e) {
    this.state.handleRemoveRow.apply(this.state.parent, [e]);
  }

  handleEdit(e) {
    this.state.handleEditRow.apply(this.state.parent.state.parent, [e]);
  }

  render() {
    return <div className="matrix-item">
      <span className="matrix-item__text">{this.state.title}</span>
      {
        this.state.gistURL ? (<a href={this.state.gistURL} target="_blank" title="Github Gist" className="github-icon"><img src="/assets/dist/img/GitHub-Mark-64px.png" /></a>) : null
      }
      <a
        title="Modify"
        className="matrix-item__edit"
        href="#"
        data-rowid={this.state.id}
        onClick={this.handleEdit.bind(this)}>✎</a>
      <a
        title="Delete"
        className="matrix-item__delete"
        href="#"
        data-rowid={this.state.id}
        onClick={this.handleRemove.bind(this)}>×</a>
    </div>;
  }

}

export class EisenhowerMatrix extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      parent: this.props.parent,
      tableName: this.props.tableName,
      tableRows: this.props.tableRows,
      tableColumns: this.props.tableColumns,
      viewType: this.props.viewType,
      isView: this.props.isView,
      handleRemoveRow: this.props.handleRemoveRow,
      handleEditRow: this.props.handleEditRow
    };
  }

  render() {
    const toBool = (scalar) => {
      return !!parseInt(scalar, 10);
    };
    const item = (index, row) => {
      return <MatrixItem
        parent={this} key={index} id={row.id} title={row.task_title} tableName={this.state.tableName}
        isImportant={row.isImportant()} isUrgent={row.isUrgent()} gistURL={row.githubGist()}
        handleRemoveRow={this.state.handleRemoveRow} handleEditRow={this.state.handleEditRow} />;
    };
    const tableRows = _.map(this.state.tableRows, (row)=>{ return new TableRow(row); });
    return (<div className="eisenhower-matrix">
      <div className="eisenhower-cell  eisenhower-cell__important-urgent">
        {_.map(tableRows, (row, index)=> {
          if (row.isImportant() && row.isUrgent()) {
            return item(index, row);
          } else {
            return null;
          }
        })}
      </div>
      <div className="eisenhower-cell  eisenhower-cell__important-noturgent">
        {_.map(tableRows, (row, index)=> {
          if (row.isImportant() && !row.isUrgent()) {
            return item(index, row);
          } else {
            return null;
          }
        })}
      </div>
      <div className="eisenhower-cell  eisenhower-cell__notimportant-urgent">
        {_.map(tableRows, (row, index)=> {
          if (!row.isImportant() && row.isUrgent()) {
            return item(index, row);
          } else {
            return null;
          }
        })}
      </div>
      <div className="eisenhower-cell  eisenhower-cell__notimportant-noturgent">
        {_.map(tableRows, (row, index)=> {
          if (!row.isImportant() && !row.isUrgent()) {
            return item(index, row);
          } else {
            return null;
          }
        })}
      </div>
    </div>);
  }
}

EisenhowerMatrix.propType = {
  parent: React.PropTypes.object,
  tableName: React.PropTypes.string,
  tableRows: React.PropTypes.array,
  tableColumns: React.PropTypes.array,
  isView: React.PropTypes.bool,
  viewType: React.PropTypes.string,
  handleRemoveRow: React.PropTypes.func,
  handleEditRow: React.PropTypes.func
};

MatrixItem.propType = {
  id: React.PropTypes.number,
  parent: React.PropTypes.object,
  tableName: React.PropTypes.string,
  title: React.PropTypes.string,
  isImportant: React.PropTypes.bool,
  isUrgent: React.PropTypes.bool,
  gistURL: React.PropTypes.string,
  handleRemoveRow: React.PropTypes.func,
  handleEditRow: React.PropTypes.func
};

window.EisenhowerMatrix = EisenhowerMatrix;
