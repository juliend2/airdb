class DiagramNode extends React.Component {
  render() {
    return <div className="diagram-node">
        {this.props.table_name}
      </div>;
  }
}

class Diagram extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      nodes: this.props.nodes,
      tables: this.props.allTables
    }
  }

  handleTableClick(e) {
    e.preventDefault();
    console.log('table', e.target.innerHTML);
    $.post('/?action=ajax_add_node_to_table', {
      diagram_id: this.state.id,
      table_name: e.target.innerHTML,
      left: 1,
      top: 1
    }, (data, textstatus)=>{
      console.log('success', data);
      this.setState({
        nodes: this.state.nodes.concat([{
          id: data.node_id,
          table_name: data.table_name,
          top: data.top,
          left: data.left
        }])
      });
    }.bind(this), 'json');
  }

  render() {
    return (
      <div className="diagram_container">
        <h1>Diagram: {this.state.name}</h1>
        <div className="diagram">
          <div className="diagram__available_tables">
            <ul>
            {this.state.tables.map((t, i)=>{
              return <li
              key={i}
              className="table__name"
              onClick={this.handleTableClick.bind(this)}>{t}</li>
            }.bind(this))}
            </ul>
          </div>
          <div className="diagram__canvas">
          <h2>Diagram</h2>
            {this.state.nodes.map((n , i)=>{
              return <DiagramNode
                key={n.id}
                id={n.id}
                table_name={n.table_name}
                />
            })}
          </div>
        </div>
      </div>
    );
  }

}

Diagram.propType = {
  name: React.PropTypes.number,
  name: React.PropTypes.string,
  nodes: React.PropTypes.array,
  allTables: React.PropTypes.array
};

window.Diagram = Diagram;
