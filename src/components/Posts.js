import React from 'react';

function Posts(props) {
  return (
    <div className="post--container">
      <h3>{props.title}</h3>
      <h5>{props.body}</h5>
    </div>
  );
}

export default Posts;
