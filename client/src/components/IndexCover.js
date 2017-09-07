import React from 'react';
import Background from '../images/index-cover.jpg';
import HeadingBlock from './HeadingBlock';

const IndexCover = () => (
  <div style={styles.container}>
    <section style={styles.cover}>
      <HeadingBlock />
    </section>
  </div>
);

const styles ={
  container: {
    width: '100vw',
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cover: {
    width: '95vw',
    height: '80vh',
    background: "linear-gradient(0deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1)), url(" + Background + ")",
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}

export default IndexCover;
