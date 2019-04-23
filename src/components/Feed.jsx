import React from 'react';
import Messages from './Messages';


class Feed extends React.Component {
  constructor(props) {
    super(props)
  }


  render(){

    return(
      <div>
        {this.props.listOfMessages.map((post, index) =>
          <Messages title={post.title}
            text={post.text}
            likes={post.likes}
            onNewLike={this.props.onNewLike}
            index={index}
            key={index}/>
        )}
      </div>
    );
  }
}

export default Feed;
