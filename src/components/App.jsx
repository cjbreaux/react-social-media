import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import ProfileDescription from "./ProfileDescription";

function App() {
  const appContainer = {
    display: 'grid',
    gridTemplateColumns: ''
  }
  return (
    <div style={appContainer}>
      <h1> TWEETER </h1>
      <Header/>
      <Profile/>
      <ProfileDescription/>
    </div>
  );
}

export default App;
