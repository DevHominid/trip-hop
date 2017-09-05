import React from 'react';
import Background from '../images/about-cover.jpg';

const About = () => (
  <div>
    <div style={styles.headerBlock}>
      <h2 style={styles.header}>About</h2>
    </div>
    <div style={styles.container}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra quam non
        viverra tempor. Mauris sed euismod risus. Integer a commodo elit. Vestibulum aliquam
        magna fermentum ligula semper lacinia. Ut faucibus leo ut nisi tempor, hendrerit
        elementum sem tristique. Mauris metus elit, vehicula vel condimentum ultrices,
        tincidunt et turpis. Cras auctor dapibus nulla.
      </p>
      <p>
        Cras eu justo condimentum mauris ultricies faucibus. Morbi ut ullamcorper velit. Nulla
        ac interdum nunc. Donec id posuere nisi, id sagittis odio. Proin sodales turpis eget
        velit congue, ut cursus mauris convallis. Pellentesque hendrerit, orci vel accumsan
        accumsan, libero tellus ornare mauris, feugiat ultrices quam leo a massa. Nulla
        facilisi. Praesent ac dictum lacus. Morbi in dolor a turpis ullamcorper placerat vitae
        in purus. Sed pharetra non magna eu scelerisque. Ut in tortor in velit consectetur
        sollicitudin. Cras non nibh quis nisi pharetra tincidunt. Praesent in lorem in enim
        aliquam finibus. Nulla malesuada erat sit amet efficitur consequat.
      </p>
    </div>
  </div>
);

const styles = {
  headerBlock: {
    width: '100%',
    height: '35vh',
    background: "url(" + Background + ")",
    backgroundSize: 'cover',
    backgroundPosition: '50% 40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: '3rem',
    fontFamily: 'Maven Pro, sans-serif',
    textTransform: 'uppercase'
  },
  container: {
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}

export default About;
