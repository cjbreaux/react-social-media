import React from 'react';
import User from './User';

function FriendsList() {
  const gridStyle = {
    border: '1px solid blue',
    gridArea: "2 / 3 / span 2"
  }
  return(
    <div style={gridStyle}>
      <User
        name="Maly"/>
      <User
        name="Chris"/>
    </div>
  );
}

export default FriendsList;
