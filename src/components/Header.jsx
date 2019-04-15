import React from 'react';
import Links from './Links';
import Search from './Search';

function Header() {
  const navFlex = {
    display: 'flex',
    justifyContent: 'space-between'
  }
  const gridStyle = {
    gridColumnStart: 'span 3'
  }
  return (
    <div style={gridStyle}>
      <div style={navFlex}>
        <Links/>
        <Search/>
      </div>
  </div>
  );
}

export default Header;
