import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

class ItemForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {addItem: false, newItem: ""}
    this.addItemForm = this.addItemForm.bind(this);
    this.addItemLink = this.addItemLink.bind(this);
    this.toggleAddItem = this.toggleAddItem.bind(this);
    this.itemChange = this.itemChange.bind(this);
    this.addNewItemToDB = this.addNewItemToDB.bind(this);
  }

  componentDidUpdate() {
    if(this.state.addItem === true)
      ReactDOM.findDOMNode(this.refs.itemInput).focus()
  }


  addNewItemToDB() {
    let item = this.state.newItem;
    let listId = this.props.listId;
    fetch('/items', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({item, listId})
    }).then(function(res) {
      return res.json();
    }).then(function(item) {
      this.props.addNewItemToDOM(item);
      this.toggleAddItem();
    }.bind(this))
  }


  toggleAddItem() {
    this.setState({addItem: !this.state.addItem, newItem: ""})
  }

  itemChange(e) {
    this.setState({newItem: e.target.value})
  }

  addItemLink(style) {
    return (
      <a style={style.addLink} className="grey-text" onClick={this.toggleAddItem}>Add an item...</a>
    )
  }

  addItemForm(style) {
    return (
      <div>
        <div style={style.titleInput} className="card-content">
          <textarea
            style={style.item}
            className="materialize-textarea grey-text text-darken-3"
            placeholder="Item..."
            onChange={this.itemChange}
            value={this.state.newItem}
            ref="itemInput"
          ></textarea>
        </div>
        <div>
          <a style={style.editButtons} className="btn-flat" onClick={this.toggleAddItem}>Cancel</a>
          <a style={style.editButtons} className="btn-flat" onClick={this.addNewItemToDB}>Add</a>
        </div>
      </div>
    )
  }

  render() {
    let style = {
      addLink: {textTransform: "none", cursor: "pointer"},
      cardcontent: {padding: "0"},
      titleInput: {padding: "0"},
      item: {lineHeight: "1", fontSize: "15px", margin: "0 0 5px 0"},
      bucketTitle: {margin: "10px 10px 0", fontSize: "24px"},
      editButtons: {color: "#424242", padding: "0 .5rem", marginRight: "3px"}
    };

    if (this.state.addItem) {
      return this.addItemForm(style)
    } else {
      return this.addItemLink(style)
    }

  }
}

export default ItemForm;
