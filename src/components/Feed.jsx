import React from 'react';
import Messages from './Messages';


class Feed extends React.Component {
  constructor(props) {
    super(props)
   this.handleNewLike = this.handleNewLike.bind(this);
   this.handleNewPost = this.handleNewPost.bind(this);
  }

  handleNewLike(index) {
    //need to pass this to Messages, setState needs an object
    this.setState({likes: this.state.listOfMessages[index].likes +=1})
  }

  handleNewPost(newPost) {
    const newListOfMessages = this.state.listOfMessages.slice();
    newListOfMessages.push(newPost);
    this.setState({listOfMessages: newListOfMessages});
  }

  render(){

    return(
      <div>
        {this.props.listOfMessages.map((post, index) =>
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
