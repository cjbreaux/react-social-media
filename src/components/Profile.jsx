import React from 'react';
import ProfileLinks from './ProfileLinks';
import user from '../assets/images/user.jpeg';

function Profile() {
  const profileDiv = {
    gridArea: "2 / 1 / 3 / 2",
    position: 'relative',
    border: '2px solid #cccccc'
  }
  const imageStyle = {
    height:'5vh',
    width: 'auto',
    backgroundColor: '#2c97de',
    border: '1px solid white',
    borderRadius: '20px',
    padding: '10px',
    position: 'absolute',
    top: '25px',
    left: '10px'
  }
  const backgroundStyle = {
    backgroundColor: '#2c97de',
    zIndex: '-1',
    height: '75px',
    marginBottom: '40px'
  }
  const namePosition = {
    position: 'absolute',
    bottom: '5vh',
    right: '30px'
  }
  return (
    <div style={profileDiv}>
      <div style={backgroundStyle}></div>
      <img style={imageStyle} src={user}/>
      <h3 style={namePosition}> Epi Codus </h3>
      <ProfileLinks/>
    </div>

  );
}

export default Profile;
