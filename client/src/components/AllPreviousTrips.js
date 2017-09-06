import React from 'react';
import TripAPI from '../TripAPI';
import { Link } from 'react-router-dom';

const AllPreviousTrips = () => (
  <div>
    <section>
      <div style={styles.divBlock}>
        {
          TripAPI.getRecent().map(t => (
            <Link to={`/trips/previous/${t.number}`} key={t.number} style={styles.linkBlock}>
              <img src={t.img} alt='trip' style={styles.img} />
            </Link>
          ))
        }
      </div>
    </section>
  </div>
);

const styles ={
  divBlock: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  linkBlock: {
    margin: '20px'
  },
  img: {
    width: '225px',
    height: '175px'
  }
}

export default AllPreviousTrips;
