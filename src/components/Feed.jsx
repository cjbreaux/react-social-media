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
          likes: 22,
          isButtonDisabled: false

        },
        {
          title: 'Burger time',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          likes: 7,
          isButtonDisabled: false
        },
        {
          title: 'Call me ASAP',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          likes: 14,
          isButtonDisabled: false
        }
      ]
    }
   this.handleNewLike = this.handleNewLike.bind(this);
  }

  handleNewLike(index) {
    //need to pass this to Messages, setState needs an object
    this.setState({likes: this.state.listOfMessages[index].likes +=1})
  }

  render(){

    return(
      <div>
        {this.state.listOfMessages.map((post, index) =>
          <Messages title={post.title}
            text={post.text}
            likes={post.likes}
            onNewLike={this.handleNewLike}
            index={index}
            key={index}/>
        )}
      </div>
    );
  }
}

export default Feed;
