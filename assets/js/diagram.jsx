class Diagram extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      nodes: this.props.nodes,
      tables: this.props.allTables
    }
  }

  render() {
    return (
      <div className="diagram_container">
        <h1>Diagram: {this.state.name}</h1>
        <div className="diagram">
          <div className="diagram__available_tables">
            <ul>
            {this.state.tables.map((t, i)=>{
              return <li key={i}>{t}</li>
            })}
            </ul>
          </div>
          <div className="diagram__canvas">
          <h2>Diagram</h2>
            <ul>
            {this.state.nodes.map((n , i)=>{
              return <li key={i}>{n.diagram_name}</li>
            })}
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

Diagram.propType = {
  name: React.PropTypes.string,
  nodes: React.PropTypes.array,
  allTables: React.PropTypes.array
};

window.Diagram = Diagram;
