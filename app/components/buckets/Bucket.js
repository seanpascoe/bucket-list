import React from 'react';
import 'whatwg-fetch';

const Bucket = (props) => {
  let style = {
    card: {borderRadius: "10px"},
    cardcontent: {padding: "20px 20px 20px 20px"},
    anchors: {marginLeft: "10px", marginRight: "10px"},
    deleteBucket: {zIndex: 100, position: "absolute", right:"7px", top:"7px"},
    bucketLink: {cursor: "pointer"},
    bucketIcon: {fontSize: "7rem"}
  };

  function deleteBucketFromDB(e) {
    e.stopPropagation()
    fetch(`/buckets/${props._id}`, {
      method: 'DELETE'
    }).then(function() {
      props.deleteBucketFromDOM(props._id)
    })
  }

  return (
    <div className="col s12 m4 l3">
      <div style={style.bucketLink} onClick={() => window.location = `/buckets/${props._id}`}>
        <div style={style.card} className="card orange bucket">
          <i style={style.deleteBucket} className="material-icons delete-bucket" onClick={deleteBucketFromDB}>delete_forever</i>
          <div style={style.cardcontent} className="card-content white-text center">
            <p className="card-title">{props.title}</p>
            <i style={style.bucketIcon} className="material-icons orange-text text-lighten-4">{props.icon_name}</i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bucket;
