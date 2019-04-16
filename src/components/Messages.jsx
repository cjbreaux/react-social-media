import React from 'react';
import user from '../assets/images/user.jpeg';
import PropTypes from 'prop-types';

function Messages(props) {
  const imageStyle = {
    height: '3vh'
  }
  return(
    <div>
      <img style={imageStyle} src={user}></img>
      <h3>{props.title}</h3>
      <h3>{props.text}</h3>
    </div>
  );
}


Messages.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
};

export default Messages;
