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
    return (
      <div className="row">
        <form onSubmit={this.addBucket} className="col s12">
          <div className="input-field">
            <input
              type="text"
              placeholder="Bucket Name..."
              value={this.state.title}
              onChange={this.handleTitle} />
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Icon key..."
              value={this.state.icon_name}
              onChange={this.handleIconName} />
          </div>
          <button className="btn" type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default BucketForm;
