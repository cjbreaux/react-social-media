import React from 'react';
import Feed from './Feed';
import NewMessageForm from './NewMessageForm';

class FeedContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false
    };
    this.handleNewPost = this.handleNewPost.bind(this);
  }
  handleNewPost() {
    this.setState({formVisble: !this.state.formVisble});
    console.log(this.state.formVisble);
  }
  render() {
    return(
      <div>
        <button onClick={this.handleNewPost}>Post a New Message</button>
        <Feed />
      </div>
    );
  }
}

export default FeedContainer;
