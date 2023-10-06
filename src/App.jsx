import './App.css';
import React from 'react';
import Card from './components/Card';

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
        {/* <Card 
          imageSrc={amsterdamImage}
          title="Amsterdam"
          subtitle="Netherlands"
        />
        <Card 
          imageSrc={viennaImage}
          title="Vienna"
          subtitle="Austria"
        />
        <Card 
          imageSrc={irelandImage}
          title="Dublin"
          subtitle="Republic of Ireland"
        />
        <Card 
          imageSrc={belfastImage}
          title="Belfast"
          subtitle="Northern Ireland"
        />
        <Card 
          imageSrc={edinburghImage}
          title="Edinburgh"
          subtitle="Scotland"
        />
        <Card 
          imageSrc={brugesImage}
          title="Bruges"
          subtitle="Belgium"
        />
        <Card 
          imageSrc={luxembourgImage}
          title="Luxembourg City"
          subtitle="Luxembourg"
        />
        <Card 
          imageSrc={berlinImage}
          title="Berlin"
          subtitle="Germany"
        />
        <Card 
          imageSrc={copenhagenImage}
          title="Copenhagen"
          subtitle="Denmark"
        />
        <Card 
          imageSrc={stockholmImage}
          title="Stockholm"
          subtitle="Sweden"
        />
        <Card 
          imageSrc={helsinkiImage}
          title="Helsinki"
          subtitle="Finland"
        />
        <Card 
          imageSrc={tallinnImage}
          title="Tallinn"
          subtitle="Estonia"
        />
        <Card 
          imageSrc={bergenImage}
          title="Bergen"
          subtitle="Norway"
        /> */}
      </div>
    </div>
  )
}

export default App;