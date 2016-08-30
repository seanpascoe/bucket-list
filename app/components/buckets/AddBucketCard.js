import React from 'react';

const AddBucketCard = (props) => {
  let style = {
    card: {borderRadius: "10px", boxShadow: "none"},
    cardcontent: {padding: "20px 20px 20px 20px"},
    anchors: {marginLeft: "10px", marginRight: "10px"},
    bucketLink: {cursor: "pointer"},
    bucketIcon: {fontSize: "7rem"}
  };

  return (
    <div className="col s12 m4 l3">
      <div style={style.bucketLink} onClick={props.toggleAddBucket}>
        <div id="addBucketCard" style={style.card} className="card">
          <div style={style.cardcontent} className="card-content center">
            <p className="card-title">Add a Bucket</p>
            <i style={style.bucketIcon} className="material-icons">note_add</i>
          </div>
        </div>
      </div>
    </div>
  )
}


export default AddBucketCard;
