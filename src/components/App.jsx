import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import ProfileDescription from "./ProfileDescription";
import FriendsList from "./FriendsList";
import FeedContainer from "./FeedContainer";
import NewMessageForm from "./NewMessageForm";

function App() {
  const appContainer = {
    display: 'grid',
    gridTemplateColumns: '24vw 48vw 24vw',
    // gridTemplateRow: 'repeat(8, 1fr)',
    gridGap: '1%'
  }

  return (
    <div style={appContainer}>
      <Header/>
      <Profile/>
      <ProfileDescription/>
      <FriendsList/>
      <FeedContainer/>
    </div>
  );
}

export default App;
