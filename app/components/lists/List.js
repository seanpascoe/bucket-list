import React from 'react';
import Items from '../items/Items';

const List = (props) => {
  let style = {
    card: {borderRadius: "5px"},
    cardcontent: {padding: "5px 10px 0 10px"},
    cardTitle: {
      lineHeight: "1.5",
      fontSize: "18px",
      fontWeight: "500"
    },
    anchors: {marginLeft: "10px", marginRight: "10px"},
    cardaction: {borderRadius: "5px", padding: "10px"}
  };

  return (
    <div className="col s12 m4 l3">
      <div style={style.card} className="card grey lighten-3">
        <div style={style.cardcontent} className="card-content">
          <span style={style.cardTitle} className="card-title grey-text text-darken-3">{props.title}</span>
          <i style={style.cardTitle} className="material-icons right">close</i>
        </div>
        <div style={style.cardaction} className="card-action">
          <Items listId={props._id} />
        </div>
      </div>
    </div>
  )
}

export default List;
