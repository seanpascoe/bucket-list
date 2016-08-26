import React from 'react';
import ReactDOM from 'react-dom';
import BucketPage from './containers/BucketPage';

let id = window.location.pathname.split("/buckets/")[1];

ReactDOM.render(<BucketPage id={id} />, document.getElementById('content'));
