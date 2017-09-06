import React from 'react';
import Background from '../images/index-cover.jpg';

const IndexCover = () => (
  <section style={styles.cover}>
    <div style={styles.headingBlock}>
      <h1>Take a Trip.</h1>
      <h2 style={styles.heading}>Share it when you get back.</h2>
    </div>
  </section>
);

const styles ={
  cover: {
    width: '100vw',
    height: '90vh',
    background: "linear-gradient(0deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1)), url(" + Background + ")",
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
  },
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

export default IndexCover;
