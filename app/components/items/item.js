import React from 'react';

class Item extends React.Component{
  constructor(props) {
    super(props)
    this.itemHover = this.itemHover.bind(this);
    this.itemNotHover = this.itemNotHover.bind(this);
    this.deleteItemInDB = this.deleteItemInDB.bind(this);
  }

  deleteItemInDB() {
    let itemId = this.props._id;
    fetch(`/items/${itemId}`, {
      method: 'DELETE'
    }).then(function() {
      this.props.deleteItemFromDOM(itemId);
    }.bind(this))
  }

  itemHover() {
    let deleteIcon = this.refs.deleteIcon;
    deleteIcon.style.visibility = "visible";
  }

  itemNotHover() {
    let deleteIcon = this.refs.deleteIcon;
    deleteIcon.style.visibility = "hidden";
  }

  render() {
    let style = {
      item: {padding: "5px", marginBottom: "10px", backgroundColor: "white", borderRadius: "3px", boxShadow: "0 1px 2px 0 rgba(0,0,0,0.16),0 1px 5px 0 rgba(0,0,0,0.12)", position: "relative"},
      deleteItem: {position: "absolute", right: "5px", top: "5px", fontSize: "18px", backgroundColor: "white", borderRadius: "50%", visibility: "hidden"}
    }

    return (
      <div style={style.item} onMouseOver={this.itemHover} onMouseOut={this.itemNotHover}>
        <div>
          {this.props.item}
        </div>
        <i ref="deleteIcon" style={style.deleteItem} className="material-icons delete-icon" onClick={this.deleteItemInDB}>close</i>
      </div>
    )
  }

}

export default Item;
