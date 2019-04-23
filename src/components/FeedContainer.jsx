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
    const gridStyle = {
      gridArea: "2 / 2 / 6 / 3"
    }
    let viewToRender = null;
    if (this.state.formVisble === true) {
      viewToRender = <NewMessageForm />
    } else {
      viewToRender = <Feed />
    }

    return(
      <div className='gridStyle'>
        <button onClick={this.handleNewPost}>Post a New Message</button>
        {viewToRender}
      </div>
    );
  }
}

export default FeedContainer;
