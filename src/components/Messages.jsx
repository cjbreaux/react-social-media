import React from 'react';
import user from '../assets/images/user.jpeg';
import PropTypes from 'prop-types';

function Messages(props) {
  const imageStyle = {
    height: '3vh'
  }
  const viewWidth = {
    width: '80%',
    textAlign: 'center',
    margin: 'auto'
  }
  return(
    <div style={viewWidth}>
      <style jsx>{`
        .title {
           font-family: sans-serif;
        }
        .text {
          color: grey;
          font-family: sans-serif;
        }

      `}</style>
      <img style={imageStyle} src={user}></img>
      <h3 className="title">{props.title}</h3>
      <h3 className="text">{props.text}</h3>
    </div>
  );
}


Messages.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
};

export default Messages;
