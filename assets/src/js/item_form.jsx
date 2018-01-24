var React = require('react');
var _ = require('lodash');

export class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      //tableName: this.props.tableName,
      tableRow: this.props.tableRow,
      mode: this.props.mode, // 'edit' or 'new'
      tableColumns: this.props.tableColumns,
      isVisible: this.props.isVisible
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submit!');
  }

  render() {
    return (
      <div
        className="item-form-container"
        style={{display: this.props.isVisible ? 'block' : 'none'}}
        data-id={this.state.id}>
        <form action="#" className="item-form" onSubmit={this.handleSubmit.bind(this)}>
          {this.state.tableColumns.map((col, index)=>{
            console.log(this.state.tableRow, this.props.tableRow, col);
            if (col.name == 'id') {
              return <input key={index} type="hidden" name="id" />;
            } else {
              return <p key={index}>{col.name} : {this.props.tableRow[col.name]}</p>;
            }
          })}
          <input type="submit" value={this.state.mode == 'edit' ? 'Update' : 'Create'} name="submit" />
        </form>
      </div>
    );
  }
}

ItemForm.propType = {
  mode: React.PropTypes.string,
  tableColumns: React.PropTypes.array,
  isVisible: React.PropTypes.bool
};

window.ItemForm = ItemForm;
