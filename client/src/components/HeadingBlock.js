import React from 'react';

const HeadingBlock = () => (
  <div style={styles.headingBlock}>
    <h1>Take a Trip.</h1>
    <h2 style={styles.heading}>Share it when you get back.</h2>
  </div>
);

const styles = {
  headingBlock: {
    marginLeft: '10%',
    fontFamily: 'Maven Pro, sans-serif',
    fontSize: '2.5rem',
    color: '#0A0908',
  },
  heading: {
    fontWeight: 'normal',
    fontSize: '2.5rem'
  }
}

export default HeadingBlock;
