import React from 'react';
import { Link } from 'react-router-dom';

function User(props) {
  return (
    <div className="user--container">
      <img src={props.image} alt="profile--pic" />
      <p className="username">{props.name}</p>
      <p className="email">{props.email}</p>
      <Link to="/posts">
        <p
          onClick={() => {
            props.func(props.user);
          }}
        >
          Posts
        </p>
      </Link>
    </div>
  );
}

export default User;
