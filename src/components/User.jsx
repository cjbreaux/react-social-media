import React from 'react';
import user from '../assets/images/user.jpeg';
import PropTypes from 'prop-types';

function User(props) {
  const imageStyle = {

  }
  return (
    <div>
      <img src={user}></img>
      <h1>{props.name}</h1>
      <button>Button</button>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string
};

export default User;
