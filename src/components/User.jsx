import React from 'react';
import user from '../assets/images/user.jpeg';
import PropTypes from 'prop-types';

function User(props) {

  const imageStyle = {
    height: '3vh'
  }

  return (
    <div>
      <style jsx>{`
        .userLayout {
          display: flex;
          flexDirection: row;
          align-items: center;
        }
        img {
          padding: 20px;
        }
        button {
          height: 35px;
          width: 50px;
          margin-left: 40px;
        }
        h1 {
          margin-left: 40px;
        }
      `}</style>
      <div className = "userLayout">
        <img style={imageStyle} src={user}></img>
        <h1>{props.name}</h1>
      </div>
      <div className="userLayout">
        <h1>{props.number}</h1>
        <button>Button</button>
      </div>
    </div>
  )}

User.propTypes = {
  name: PropTypes.string
}

export default User
