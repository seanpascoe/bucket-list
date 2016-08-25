import React from 'react';

const Bucket = (props) => {
  let style = {
    card: {borderRadius: "10px"},
    cardcontent: {padding: "20px 20px 0 20px"},
    anchors: {marginLeft: "10px", marginRight: "10px"},
    cardaction: {borderRadius: "10px"}
  };

  return (
    <div className="col s12 m4 l3">
      <div style={style.card} className="card orange">
        <div style={style.cardcontent} className="card-content white-text center">
          <p className="card-title">{props.title}</p>
          <i className="large material-icons orange-text text-lighten-4">{props.icon_name}</i>
        </div>
        <div style={style.cardaction} className="card-action center">
          <a style={style.anchors} className="white-text" href="#">Show</a>
          <a style={style.anchors} className="white-text" href="#">Delete</a>
        </div>
      </div>
    </div>
  )
}

export default Bucket;
