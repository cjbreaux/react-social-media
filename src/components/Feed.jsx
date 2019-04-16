import React from 'react';
import Messages from './Messages';

const listOfMessages = [
  {
    title: 'Whats up?',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },
  {
    title: 'Burger time',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },
  {
    title: 'Call me ASAP',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

function Feed() {
  const gridStyle = {
    border: '1px solid blue',
    gridArea: "2 / 2 / span 3"
  }
  return(
    <div style={gridStyle}>
      {listOfMessages.map((post, index) =>
        <Messages title={post.title}
                  text={post.text}
                  key={index}/>
      )}
    </div>
  );
}

export default Feed;
