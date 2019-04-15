import React from 'react';

function ProfileDescription() {
  const divStyle = {
    gridArea: "3 / 1",
    marginTop: '30px',
    width: '225px',
    height: '30vh',
    border: '2px solid #cccccc',
    textAlign: 'left',
    padding: '5px'
  }
  return(
    <div style={divStyle}>
      <p> Don't assume React components are the exact same as the Angular components you've recently grown comfortable with, despite a</p>
      <p>similar name. React components are actually quite different; they represent UI containers, not points of functionality. Take your time.</p>
      <p> Question your preconceived notions of what components should be. </p>
    </div>

  );
}

export default ProfileDescription;
