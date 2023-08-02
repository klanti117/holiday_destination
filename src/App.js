import React, { useState } from 'react';
import './App.css';
import Card from './components/Card/index'

function App() {
  const [countries, setCountries] = useState([]);
  
  const getData = async () => {
    const res = await fetch(
      'https://restcountries.com/v3.1/independent?status=true'
    );
    const data = await res.json();
    setCountries(data);
    console.log(typeof data)
  };

  return (
    <div className="App">
      <h1>30 Days Of React: Day6</h1>
      <button onClick={getData}>Select Your Destination</button>
        <div>
        {countries.map(({name, capital,population, flags:{png, alt} }) => (
          <div key={name}>
            <Card 
              name={name.common} 
              capital={capital}  
              population={population}  
              flagSrc={png}
              flagAlt={alt}
              />
              <h1>end of </h1>
          </div>
          ))}
        </div> 
    </div>
  );
}

export default App;
