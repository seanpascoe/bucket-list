import React from 'react';
import 'whatwg-fetch';

class BucketForm extends React.Component {
  constructor(props) {
    super(props)
    this.addBucket = this.addBucket.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleIconName = this.handleIconName.bind(this);
    this.state = {title:"", icon_name:""};
  }

  handleTitle(e) {
    this.setState({title: e.target.value});
  }

  handleIconName(e) {
    this.setState({icon_name: e.target.value});
  }

  addBucket(e) {
    e.preventDefault();
    let title = this.state.title;
    let icon_name = this.state.icon_name;

    fetch('/buckets', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title, icon_name})
    }).then(function(res) {
      return res.json()
    }).then(function(bucket) {
      this.props.addBucket(bucket);
      this.setState({title:"", icon_name:""});
    }.bind(this));

    // $.ajax({
    //   url: "/buckets",
    //   type: "POST",
    //   dataType: "JSON",
    //   data: {title, icon_name}
    // }).done(bucket => {
    //   this.props.addBucket(bucket);
    //   this.setState({title:"", icon_name:""});
    // })
  }

  render() {
    let style = {
      card: {borderRadius: "10px"},
      cardcontent: {padding: "20px 20px 20px 20px"},
      anchors: {marginLeft: "10px", marginRight: "10px"},
      deleteBucket: {zIndex: 100, position: "absolute", right:"7px", top:"7px"},
      bucketLink: {cursor: "pointer"},
      bucketIcon: {fontSize: "7rem"},
      formContent: {padding: "10px"},
      inputs: {marginTop: 0},
      addButton: {margin: "0 auto"}
    };

    return (
      <div className="col s12 m4 l3">
        <div style={style.bucketLink}>
          <div style={style.card} className="card grey lighten-4">
            <div style={style.formContent}>
              <div style={style.inputs} className="input-field">
                <input
                  type="text"
                  placeholder="Bucket Name..."
                  value={this.state.title}
                  onChange={this.handleTitle} />
              </div>
              <div style={style.inputs} className="input-field">
                <input
                  type="text"
                  placeholder="Icon key..."
                  value={this.state.icon_name}
                  onChange={this.handleIconName} />
              </div>
              <button style={style.addButton} className="btn-flat center-align" onClick={this.props.toggleAddBucket}>Cancel</button>
              <button style={style.addButton} className="btn-flat center-align" onClick={this.addBucket}>Add</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BucketForm;


{/* <i style={style.deleteBucket} className="material-icons delete-bucket" onClick={deleteBucketFromDB}>delete_forever</i>
<div style={style.cardcontent} className="card-content white-text center">
  <p className="card-title">{props.title}</p>
  <i style={style.bucketIcon} className="material-icons orange-text text-lighten-4">{props.icon_name}</i>
</div> */}
