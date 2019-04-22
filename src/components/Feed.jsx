import React from 'react';
import Messages from './Messages';


class Feed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listOfMessages: [
        {
          title: 'Whats up?',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          likes: 22
        },
        {
          title: 'Burger time',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          likes: 7
        },
        {
          title: 'Call me ASAP',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          likes: 14
        }
      ]
    }
  }

  render(){
    const gridStyle = {
      gridArea: "2 / 2 / span 3"
    }
    return(
      <div style={gridStyle}>
        {this.state.listOfMessages.map((post, index) =>
          <Messages title={post.title}
            text={post.text}
            likes={post.likes}
            key={index}/>
        )}
      </div>
    );
  }
}

export default Feed;
