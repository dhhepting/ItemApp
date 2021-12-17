
import React from "react";
import { connect } from "react-redux";
import { addItem } from "../redux/actions";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddItem = () => {
    this.props.addItem(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddItem}>
          Add Item
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addItem }
)(AddItem);
// export default AddItem;

