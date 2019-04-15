import React from 'react';
import Links from './Links';
import Search from './Search';

function Header() {
  const navFlex = {
    display: 'flex',
    justifyContent: 'space-between'
  }
  return (
    <div style={navFlex}>
      <Links/>
      <Search/>
    </div>
  );
}

export default Header;
