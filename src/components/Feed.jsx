import React from 'react';
import Messages from './Messages';


function Feed(props) {
  return(
    <div>
      {props.listOfMessages.map((post, index) =>
        <Messages title={post.title}
          text={post.text}
          likes={post.likes}
          onNewLike={props.onNewLike}
          index={index}
          key={index}/>
      )}
    </div>
  );
}

export default Feed;
