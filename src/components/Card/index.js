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

const Card = ({name, capital, population, flag}) => {
  return (
    <div style={contianerStyle}>
        <h3><strong>Name: </strong>{name}</h3>
        <h3><strong>Capital: </strong>{capital}</h3>
        <h3><strong>Population: </strong>{population}</h3>
        <div>{flag}</div>
    </div>
  )
}

export default Card