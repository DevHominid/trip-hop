import React from 'react';
import TripAPI from '../TripAPI';
import { Link } from 'react-router-dom';
import Background from '../images/index-cover.jpg';

const coverStyle = {
  width: '100vw',
  height: '90vh',
  backgroundImage: "url(" + Background + ")",
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const divStyle = {
  width: '60%',
  background: 'rgba(216, 216, 216, 0.9)',
  paddingBottom: '20px',
}

const headerStyle = {
  marginLeft: '5%',
  marginBottom: '7px',
  fontFamily: 'Maven Pro, sans-serif',
  fontWeight: 'normal'
}

const rowStyle = {
  width: '90%',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
}

const imgStyle = {
  width: '200px',
  height: '175px'
}

const Home = () => (
  <div style={coverStyle}>
    <div style={divStyle}>
      <h2 style={headerStyle}>Recent Trips</h2>
      <div style={rowStyle}>
        {
          TripAPI.getRecent().map(t => (
            <Link to={`/trips/${t.number}`} key={t.number}>
              <img src={t.img} alt='trip' style={imgStyle} />
            </Link>
          ))
        }
      </div>
      <h2 style={headerStyle}>Future Trips</h2>
      <div style={rowStyle}>
        {
          TripAPI.getFuture().map(t => (
            <Link to={`/trips/${t.number}`} key={t.number}>
              <img src={t.img} alt='trip' style={imgStyle} />
            </Link>
          ))
        }
      </div>
    </div>
  </div>
);

export default Home;
