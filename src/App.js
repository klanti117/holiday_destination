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
    
    const { language } = data[0]
    // console.log(Object.values(language))

    const { currencies } = data[0]
    console.log( (Object.values(currencies)[0]).name )
    // console.log(Object.values(currencies[0]).name)

    // const apiDynamicKey = 'PEN'
    // const { currencies:{ PEN: { name } } } = data[0]
    // const { currencies:{ [apiDynamicKey]: { name } } } = data[0]
    // console.log(name)
  };

  return (
    <div className="App">
      <h1>30 Days Of React: Day6</h1>
      <button onClick={getData}>Select Your Destination</button>
        <div>
        {countries.map(({name, capital, population, flags: {png, alt}, 
          language, currencies
        }) => (
          <div key={name}>
            <Card 
              name={name.common} 
              capital={capital}  
              population={population}  
              flagSrc={png}
              flagAlt={alt}
              // language={getLang('key',language)}
              currencies={getCurrency(currencies)}
              />
              <h1>---------------------------------------</h1>
          </div>
          ))}
        </div> 
    </div>
  );
}

export default App;

const getLang = (str, language) =>{
  const { [str]: returnValue } = language;   
    return returnValue;
}

const getCurrency = (currencies) =>{
  return (Object.values(currencies)[0]).name 
}