import React from 'react';

function User(props) {
  return (
    <div className="user--container">
      <img src={props.image} alt="profile--pic" />
      <p className="username">{props.name}</p>
      <p className="email">{props.email}</p>
      <p onClick={props.func}>Posts</p>
    </div>
  );
}

export default User;
