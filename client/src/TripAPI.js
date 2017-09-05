const TripAPI = {
  trips: [
    {
      number: 1,
      title: "Trip Number One",
      date: "6/1/2016",
      status: "previous",
      type: "mountaineering",
      location: "Mt. Holy Cross",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Mount_of_the_Holy_Cross%2C_Colorado%2C_1900.jpg/300px-Mount_of_the_Holy_Cross%2C_Colorado%2C_1900.jpg",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra quam non viverra tempor. Mauris sed euismod risus. Integer a commodo elit. Vestibulum aliquam magna fermentum ligula semper lacinia. Ut faucibus leo ut nisi tempor, hendrerit elementum sem tristique. Mauris metus elit, vehicula vel condimentum ultrices, tincidunt et turpis. Cras auctor dapibus nulla."
    },
    {
      number: 2,
      title: "Trip Number Two",
      date: "6/3/2017",
      status: "previous",
      type: "mountaineering",
      location: "La Plata Peak",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/2007-06-24-plata-eve-close2.jpg/280px-2007-06-24-plata-eve-close2.jpg",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra quam non viverra tempor. Mauris sed euismod risus. Integer a commodo elit. Vestibulum aliquam magna fermentum ligula semper lacinia. Ut faucibus leo ut nisi tempor, hendrerit elementum sem tristique. Mauris metus elit, vehicula vel condimentum ultrices, tincidunt et turpis. Cras auctor dapibus nulla."
    },
    {
      number: 3,
      title: "Trip Number Three",
      date: "7/1/2017",
      status: "previous",
      type: "camping",
      location: "Great Sand Dunes National Park",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Coloradodunes.jpg/300px-Coloradodunes.jpg",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra quam non viverra tempor. Mauris sed euismod risus. Integer a commodo elit. Vestibulum aliquam magna fermentum ligula semper lacinia. Ut faucibus leo ut nisi tempor, hendrerit elementum sem tristique. Mauris metus elit, vehicula vel condimentum ultrices, tincidunt et turpis. Cras auctor dapibus nulla."
    },
    {
      number: 4,
      title: "Trip Number Four",
      date: "7/8/2017",
      status: "future",
      type: "mountaineering",
      location: "Longs Peak",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Fall05-LongsPeakCU_JPG_RSZ_md.jpg/280px-Fall05-LongsPeakCU_JPG_RSZ_md.jpg",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra quam non viverra tempor. Mauris sed euismod risus. Integer a commodo elit. Vestibulum aliquam magna fermentum ligula semper lacinia. Ut faucibus leo ut nisi tempor, hendrerit elementum sem tristique. Mauris metus elit, vehicula vel condimentum ultrices, tincidunt et turpis. Cras auctor dapibus nulla."
    },
    {
      number: 5,
      title: "Trip Number Five",
      date: "8/1/2017",
      status: "future",
      type: "hiking",
      location: "Banff National Park",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Moraine_Lake_17092005.jpg/300px-Moraine_Lake_17092005.jpg",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra quam non viverra tempor. Mauris sed euismod risus. Integer a commodo elit. Vestibulum aliquam magna fermentum ligula semper lacinia. Ut faucibus leo ut nisi tempor, hendrerit elementum sem tristique. Mauris metus elit, vehicula vel condimentum ultrices, tincidunt et turpis. Cras auctor dapibus nulla."
    },
    {
      number: 6,
      title: "Trip Number Six",
      date: "8/8/2017",
      status: "future",
      type: "camping",
      location: "Moraine Lake",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Moraine_Lake_Alberta_Canada.jpg/250px-Moraine_Lake_Alberta_Canada.jpg",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra quam non viverra tempor. Mauris sed euismod risus. Integer a commodo elit. Vestibulum aliquam magna fermentum ligula semper lacinia. Ut faucibus leo ut nisi tempor, hendrerit elementum sem tristique. Mauris metus elit, vehicula vel condimentum ultrices, tincidunt et turpis. Cras auctor dapibus nulla."
    }
  ],
  all: function() { return this.trips },
  get: function(id) {
    const isTrip = t => t.number === id
    return this.trips.find(isTrip)
  },
  getRecent: function() {
    const recent = this.trips.filter(trip => trip.status === 'previous');
    return recent;
  },
  getFuture: function() {
    const future = this.trips.filter(trip => trip.status === 'future');
    return future;
  }
}

export default TripAPI;
