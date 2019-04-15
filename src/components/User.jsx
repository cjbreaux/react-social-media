import React from 'react';
import user from '../assets/images/user.jpeg';
import PropTypes from 'prop-types';

function User(props) {
  const imageStyle = {
    height:'3vh'
  }
  return (
    <div>
      <img style={imageStyle} src={user}></img>
      <h1>{props.name}</h1>
      <button>Button</button>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string
};

export default User;
