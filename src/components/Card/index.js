import React from 'react'

const contianerStyle = {
  // border:'1px dotted gray',
  // width: '500px',
  // height: '250px',
  // position: 'absolute',
  // top: '15%',
  // left: '30%',
  // boxShadow: '5px 10px #888888',
}

const Card = 
({name, capital, population, flagSrc, flagAlt, currencies, languages}) => {
  return (
    <div style={contianerStyle}>
        <p><strong>Name: </strong>{name}</p>
        <p><strong>Capital: </strong>{capital}</p>
        <p><strong>Population: </strong>{population}</p>
        <p><strong>Currency: </strong>{currencies}</p>
        <p><strong>Language: </strong>{languages}</p>
        <img src={flagSrc} alt={flagAlt}/>
    </div>
  )
}

export default Card