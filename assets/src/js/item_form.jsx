var React = require('react');
var _ = require('lodash');

export class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      parent: this.props.parent,
      //tableName: this.props.tableName,
      tableRow: this.props.tableRow,
      mode: this.props.mode, // 'edit' or 'new'
      tableColumns: this.props.tableColumns,
      isVisible: this.props.isVisible,
      handleFormVisibilityChange: this.props.handleFormVisibilityChange
    };
    this.fieldTypes = {
      'bool': 'checkbox',
      'text': 'text',
      'float': 'number',
      'INTEGER': 'number',
      'datetime': 'datetime-local'
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submit!');
  }

  handleClose(e) {
    e.preventDefault();
    this.state.handleFormVisibilityChange(false);
  }

  render() {
    return this.props.isVisible ? (
      <div
        className="item-form"
        style={{display: this.props.isVisible ? 'block' : 'none'}}
        data-id={this.state.id}>
        <a href="#" className="item-form__close" onClick={this.handleClose.bind(this)}>×</a>
        <form action="#" className="item-form__form" onSubmit={this.handleSubmit.bind(this)}>
          {this.state.tableColumns.map((col, index)=>{
            //console.log(this.state.tableRow, this.props.tableRow, col);
            if (col.name == 'id') {
              return <input key={index} type="hidden" name="id" />;
            } else {
              switch (col.type) {
              case 'bool':
                return (
                  <p className="item-field" key={index}>
                    <label className="item-field__label" htmlFor={"field_"+col.name}>{col.name}:</label>
                    <input
                      name={col.name}
                      id={"field_"+col.name}
                      className="item-field__input"
                      type={this.fieldTypes[col.type]}
                      value={this.props.tableRow[col.name] ? 'on' : 'off'}
                      checked={this.props.tableRow[col.name] && parseInt(this.props.tableRow[col.name], 10) > 0}
                      onChange={this.props.parent.handleBooleanChange.bind(this.props.parent)}
                      />
                  </p>
                );
              default:
                return (
                  <p className="item-field" key={index}>
                    <label className="item-field__label" htmlFor={"field_"+col.name}>{col.name}:</label>
                    <input
                      name={col.name}
                      id={"field_"+col.name}
                      className="item-field__input"
                      type={this.fieldTypes[col.type]}
                      value={this.props.tableRow[col.name]}
                      onChange={this.props.handleFormValueChange.bind(this.props.parent)}
                      />
                  </p>
                );
              }
            }
          })}
          <input type="submit" value={this.state.mode == 'edit' ? 'Update' : 'Create'} name="submit" />
        </form>
      </div>
    ) : <div></div>;
  }
}

ItemForm.propType = {
  mode: React.PropTypes.string,
  tableColumns: React.PropTypes.array,
  isVisible: React.PropTypes.bool
};

window.ItemForm = ItemForm;
