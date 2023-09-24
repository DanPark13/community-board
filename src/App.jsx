import './App.css';
import React from 'react';
import Card from './components/Card';

import londonImage from './assets/london.jpg'
import amsterdamImage from './assets/amsterdam.jpg'
import viennaIamge from './assets/vienna.jpg'


const App = () => {

  return (
    <div className="Card" >
      <h1>Travel Board</h1>
      <h2>Travel Planning shouldn't be difficult, or pricey. Leave the expenses for your flights and stay :)</h2>
      <div className="card-image-container">
        <Card 
          imageSrc={londonImage}
          title="London"
          subtitle="United Kingdom"
        />
        <Card 
          imageSrc={amsterdamImage}
          title="Amsterdam"
          subtitle="Netherlands"
        />
        <Card 
          imageSrc={viennaIamge}
          title="Vienna"
          subtitle="Austria"
        />
      </div>
    </div>
  )
}

export default App;