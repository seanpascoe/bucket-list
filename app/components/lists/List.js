import React from 'react';

const List = (props) => {
  let style = {
    card: {borderRadius: "5px"},
    cardcontent: {padding: "5px 5px 0 5px"},
    cardTitle: {
      lineHeight: "1.5",
      fontSize: "18px",
      fontWeight: "500"
    },
    anchors: {marginLeft: "10px", marginRight: "10px"},
    cardaction: {borderRadius: "5px"}
  };

  return (
    <div className="col s12 m4 l3">
      <div style={style.card} className="card grey lighten-3">
        <div style={style.cardcontent} className="card-content">
          <p style={style.cardTitle} className="card-title grey-text text-darken-3">{props.title}</p>
        </div>
        <div style={style.cardaction} className="card-action">
          <a style={style.anchors} className="grey-text" href="#">Add an item...</a>
        </div>
      </div>
    </div>
  )
}

export default List;
