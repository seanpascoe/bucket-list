import React from 'react';
import BucketForm from './BucketForm';
import Bucket from './Bucket';
import 'whatwg-fetch';

class BucketsPage extends React.Component {
  constructor(props) {
    super(props)
    this.addBucket = this.addBucket.bind(this);
    this.deleteBucket =this.deleteBucket.bind(this);
    this.state = {
      buckets: []
    }
  }

  componentWillMount() {
    fetch('/buckets')
      .then(function(res) {
        return res.json()
      }).then(function(buckets) {
        this.setState({ buckets });
      }.bind(this))

    // $.ajax({
    //   url: '/buckets',
    //   type: 'GET',
    //   dataType: 'JSON',
    // }).done(buckets => {
    //   this.setState({ buckets });
    // })
  }

  addBucket(bucket) {
    this.setState({
      buckets: [...this.state.buckets, bucket]
    })
  }

  deleteBucket(id) {
    console.log(id);
  }

  render() {
    let style = {
      h2 : {
        fontSize: "1.5em",
        marginTop: 0,
        marginLeft: "15px"
      }
    }

    let buckets = this.state.buckets.map((bucket) => {
      return (<Bucket key={bucket._id} deleteBucket={this.deleteBucket} {...bucket} />)
    })

    return (
      <div>
        <BucketForm addBucket={this.addBucket}/>
        <h2 style={style.h2}>My Buckets:</h2>
        <div className="row">
          {buckets}
        </div>
      </div>
    )
  }
}

export default BucketsPage;
