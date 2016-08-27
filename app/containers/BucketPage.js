import React from 'react';
import ListsPage from '../components/lists/ListsPage';

class BucketPage extends React.Component {
  render() {

    return (
      <div>
       <ListsPage bucketId={this.props.id} />
      </div>
    )
  }
}

export default BucketPage;
