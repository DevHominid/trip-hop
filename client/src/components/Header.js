import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header style={styles.header}>
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <div>Logo</div>
      </div>
      <ul style={styles.list}>
        <li><Link to='/' style={styles.navLink}>Home</Link></li>
        <li><Link to='/about' style={styles.navLink}>About</Link></li>
        <li><Link to='/trips' style={styles.navLink}>Trips</Link></li>
      </ul>
    </nav>
  </header>
);

const styles = {
  header: {
    width: '100%',
    height: '10vh',
    background: '#d8d8d8',
    fontFamily: 'Maven Pro, sans-serif'
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    marginLeft: '3%'
  },
  logo: {
    width: '70px',
    height: '40px',
    border: '1px solid #0A0908',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    width: '25vw',
    margin: '0',
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  navLink: {
    textDecoration: 'none',
    color: '#0A0908'
  }
}

export default Header;
