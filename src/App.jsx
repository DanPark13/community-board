import './App.css';
import React from 'react';
import Card from './Card';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import londonImage from './assets/places/london.jpg'
import London from "./timetables/London";

import amsterdamImage from './assets/places/amsterdam.jpg'
// import viennaImage from './assets/vienna.jpg'
// import irelandImage from './assets/ireland.jpg'
// import belfastImage from './assets/beflast.jpg'
// import edinburghImage from './assets/edinburgh.jpg'
// import brugesImage from './assets/bruges.jpg'
// import luxembourgImage from './assets/luxembourg.jpg'
// import berlinImage from './assets/berlin.jpg'
// import copenhagenImage from './assets/copenhagen.jpg'
// import stockholmImage from './assets/stockholm.jpg'
// import helsinkiImage from './assets/helsinki.jpg'
// import tallinnImage from './assets/tallinn.jpg'
// import bergenImage from './assets/aurlandsfjord.jpg'

const App = () => {
  const locations = [
    { imageSrc: londonImage, title: 'London', subtitle: 'United Kingdom' },
    // { imageSrc: amsterdamImage, title: 'Amsterdam', subtitle: 'Netherlands' }
  ];

  return (
      <Router>
        <Routes>
            <Route index element={<Home locations={locations} />} />
            <Route path="timetables/London" element={<London />} />
        </Routes>
      </Router>
  )
}

const Home = ({ locations }) => {
  return (
    <div className="Card">
      <h1>Travel Board</h1>
      <p>Travel Planning shouldn't be difficult or pricey. Leave the expensive stuff for your flights and stay.</p>
      <p>Never Sponsored. Free Forever.</p>
      <div className="card-container">
        {locations.map((loc) => (
          <Card key={loc.title} {...loc} />
        ))}
      </div>
    </div>
  );
};

export default App;