import React from 'react';

function ProfileLinks() {
  const linkStyle = {
    textDecoration:'none',
    textTransform: 'uppercase',
    fontSize: '.8rem',
    padding: '2px',
    color: '#cccccc'
  }
  return(
    <div>
      <a style={linkStyle} href="#">Tweets</a>
      <a style={linkStyle} href="#">Following</a>
      <a style={linkStyle} href="#">Followers</a>
    </div>
  );
}

export default ProfileLinks;
