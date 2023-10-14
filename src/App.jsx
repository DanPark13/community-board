import './App.css';
import React from 'react';
import Card from './Card';

import londonImage from './assets/places/london.jpg'
// import amsterdamImage from './assets/amsterdam.jpg'
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

  return (
    <div className="Card" >
      <h1>Travel Board</h1>
      <p>Travel Planning shouldn't be difficult or pricey. Leave the expensive stuff for your flights and stay.</p>
      <p>Never Sponsored. Free Forever.</p>
      <div className="card-container">
        <Card 
          imageSrc={londonImage}
          title="London"
          subtitle="United Kingdom"
        />
      </div>
    </div>
  )
}

export default App;