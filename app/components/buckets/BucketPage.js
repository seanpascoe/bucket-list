import React from 'react';
import BucketForm from './BucketForm';
import Bucket from './Bucket';

class BucketPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  render() {
    let style = {
      h2 : {
        fontSize: "1.5em",
        marginTop: 0,
        marginLeft: "15px"
      }
    }

    return (
      <div>
        <BucketForm />
        <h2 style={style.h2}>My Buckets:</h2>
        <div className="row">
          <Bucket title="Travel" icon_name="airplanemode_active"/>
          <Bucket title="Work" icon_name="work"/>
          <Bucket title="Fun" icon_name="motorcycle"/>
          <Bucket title="Dog" icon_name="pets"/>
        </div>
      </div>
    )
  }
}

export default BucketPage;
