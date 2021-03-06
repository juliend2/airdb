var React = require('react');
import Draggable from 'react-draggable';

class DiagramNode extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      table_name: this.props.table_name,
      table_rows: this.props.table_rows,
      table_columns: this.props.table_columns,
      diagram_id: this.props.diagram_id,
      top: this.props.top,
      left: this.props.left
    };
  }

  handleDeleteDiagram(e) {
    e.preventDefault();
    $.post('/?action=ajax_remove_node_from_diagram', {
      node_id: this.state.id,
      table_name: this.state.table_name
    }, (data, textstatus)=>{
      this.props.deleteNode(this.state.id);
    }, 'json');
  }

  handleDragStop(e: MouseEvent) {
    e.preventDefault()
    console.log('stopped dragging', 'X', e.x, 'Y', e.y);
    // debugger;
    console.log('$(e.target).offset().left', $(e.target).offset().left, "$(e.target).closest('#js-diagram__draggable-area').offset().left", $(e.target).closest('#js-diagram__draggable-area').offset().left);
    $.post('/?action=ajax_dragged_node', {
      node_id: this.state.id,
      table_name: this.state.table_name,
      left: ($(e.target).closest('#diagram-node').offset().left - $(e.target).closest('#js-diagram__draggable-area').offset().left),
      top: ($(e.target).closest('#diagram-node').offset().top - $(e.target).closest('#js-diagram__draggable-area').offset().top)
    }, (data, textstatus)=>{
      // this.props.deleteNode(this.state.id);
    }, 'json');
  }

  render() {
    return <Draggable
            handle=".js-handle"
            defaultPosition={{x: parseInt(this.props.left, 10), y: parseInt(this.props.top, 10)}}
            onStop={this.handleDragStop.bind(this)}
            bounds={{left: 0, top: 0, bottom: 3000, right: 3000}}
            >
            <div className="diagram-node" id="diagram-node">
              <div className="diagram-node__tools">
                <a className="tools__close" onClick={this.handleDeleteDiagram.bind(this)} data-id={this.props.id} href="">╳</a>
                <span className="js-handle  tools__drag-handle">⁜</span>
              </div>
              <Table
                tableName={this.props.table_name}
                tableRows={this.props.table_rows}
                tableColumns={this.props.table_columns}
                isView={false}
                />
            </div>
          </Draggable>;
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
    $.post('/?action=ajax_add_node_to_diagram', {
      diagram_id: this.state.id,
      table_name: e.target.innerHTML,
      left: 1,
      top: 1
    }, (data, textstatus)=>{
      this.setState({
        nodes: this.state.nodes.concat([{
          id: data.node_id,
          table_name: data.table_name,
          table_rows: data.table_rows,
          table_columns: data.table_columns,
          top: data.top,
          left: data.left
        }])
      });
    }, 'json');
  }

  deleteNode(node_id) {
    this.setState({
      nodes: _.reject(this.state.nodes, (node)=>{
        return node.id == node_id;
      })
    });
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
            })}
            </ul>
          </div>
          <div className="diagram__canvas">
          <h2>Diagram</h2>
            <div id="js-diagram__draggable-area">
            {this.state.nodes.map((n , i)=>{
              return <DiagramNode
                key={n.id}
                id={n.id}
                table_name={n.table_name}
                table_rows={n.table_rows}
                table_columns={n.table_columns}
                diagram_id={n.diagram_id}
                top={n.top}
                left={n.left}
                deleteNode={this.deleteNode.bind(this)}
                />
            })}
            </div>
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
