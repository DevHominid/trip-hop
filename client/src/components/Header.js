import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
  width: '100%',
  height: '10vh'
}

const Header = () => (
  <header style={headerStyle}>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/trips'>Trips</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
