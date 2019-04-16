import React from 'react';
import User from './User';

const listOfFriends = [
  {
    name: 'john',
    number: '5'
  },
  {
    name: 'chris',
    number: '9'
  },
  {
    name: 'maly',
    number: '2'
  },
  {
    name: 'leo',
    number: '10'
  }
];

function FriendsList() {
  const gridStyle = {
    border: '1px solid blue',
    gridArea: "2 / 3 / span 2"
  }
  return(
    <div style={gridStyle}>
      {listOfFriends.map((friend, index) =>
        <User name = {friend.name}
          number = {friend.number}
          key = {index}/>
      )}
    </div>
  );
}

export default FriendsList;
