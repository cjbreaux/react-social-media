import React from 'react';
import user from '../assets/images/user.jpeg';
import PropTypes from 'prop-types';

function Messages(props) {
  const imageStyle = {
    height: '3vh'
  }
  const viewWidth = {
    textAlign: 'center',
    margin: 'auto',
    border: '2px solid black',
    padding: '2%',
    margin: '2%'

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
      <p> The index position of this thing is  {props.index}</p>
      <button onClick={()=>props.onNewLike(props.index)}>Like</button> {props.likes}
    </div>
  );
}


Messages.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
};

export default Messages;
