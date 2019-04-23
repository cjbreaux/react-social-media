import React from 'react';
import Feed from './Feed';
import NewMessageForm from './NewMessageForm';

class FeedContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
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
    };
    this.swapView = this.swapView.bind(this);
  }
  swapView() {
    this.setState({formVisble: !this.state.formVisble});
    console.log(this.state.formVisble);
  }

  render() {
    const gridStyle = {
      gridArea: "2 / 2 / 6 / 3"
    }
    let viewToRender = null;
    if (this.state.formVisble === true) {
      viewToRender = <NewMessageForm  />
    } else {
      viewToRender = <Feed listOfMessages={this.state.listOfMessages} />
    }

    return(
      <div className='gridStyle'>
        <button onClick={this.swapView}>Post a New Message</button>
        {viewToRender}
      </div>
    );
  }
}

export default FeedContainer;
