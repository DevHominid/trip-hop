import React from 'react';
import TripAPI from '../TripAPI';
import { Link } from 'react-router-dom';
import Background from '../images/index-cover.jpg';

const Home = () => (
  <div>
    <div style={styles.cover}>
      <div style={styles.headingBlock}>
        <h1>Lorem Ipsum</h1>
        <h2>Cras viverra quam non viverra.</h2>
      </div>
    </div>
    <div>
      <div style={styles.divBlock}>
        <h2 style={styles.heading}>Recent Trips</h2>
        <div style={styles.row}>
          {
            TripAPI.getRecent().map(t => (
              <Link to={`/trips/${t.number}`} key={t.number}>
                <img src={t.img} alt='trip' style={styles.img} />
              </Link>
            ))
          }
        </div>
        <h2 style={styles.heading}>Future Trips</h2>
        <div style={styles.row}>
          {
            TripAPI.getFuture().map(t => (
              <Link to={`/trips/${t.number}`} key={t.number}>
                <img src={t.img} alt='trip' style={styles.img} />
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  </div>
);

const styles = {
  cover: {
    width: '100vw',
    height: '90vh',
    backgroundImage: "url(" + Background + ")",
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
  },
  headingBlock: {
    marginLeft: '10%',
    fontFamily: 'Maven Pro, sans-serif',
    fontSize: '2rem',
    color: '#0A0908'
  },
  divBlock: {
    width: '60%',
    background: 'rgba(216, 216, 216, 1.0)',
    paddingBottom: '20px',
  },
  heading: {
    marginLeft: '5%',
    marginBottom: '7px',
    fontFamily: 'Maven Pro, sans-serif',
    fontWeight: 'normal'
  },
  row: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  img: {
    width: '175px',
    height: '125px'
  }
}

export default Home;
