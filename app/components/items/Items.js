import React from 'react';
import ItemForm from './ItemForm';
import Item from './Item';
import 'whatwg-fetch';

class Items extends React.Component {
  constructor(props) {
    super(props)
    this.addNewItemToDOM = this.addNewItemToDOM.bind(this);
    this.deleteItemFromDOM = this.deleteItemFromDOM.bind(this);
    this.state = {items: []}
  }

  componentWillMount() {
    let listId = this.props.listId;
    fetch(`/items/${listId}`)
    .then(function(res) {
      return res.json()
    }).then(function(items) {
      this.setState({ items })
    }.bind(this))
  }

  deleteItemFromDOM(itemId) {
    this.setState({ items: this.state.items.filter(item => item._id !== itemId)});
  }

  addNewItemToDOM(item) {
    this.setState({items: [...this.state.items, item]})
  }

  render() {
    let items = this.state.items.map(item => (
      <Item key={item._id} deleteItemFromDOM={this.deleteItemFromDOM} {...item} />
    ))
    return (
      <div>
        {items}
        <ItemForm
          addNewItemToDOM={this.addNewItemToDOM}
          listId={this.props.listId} />
      </div>
    )
  }
}

export default Items;
