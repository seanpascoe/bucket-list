import React from 'react';

class BucketForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="input-field">
            <input type="text" placeholder="Bucket Name..."/>
          </div>
        </form>
      </div>
    )
  }
}

export default BucketForm;
