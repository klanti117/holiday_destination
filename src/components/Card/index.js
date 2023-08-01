import React from 'react'

const contianerStyle = {
  border:'1px dotted gray',
  width: '500px',
  height: '250px',
  position: 'absolute',
  top: '15%',
  left: '30%',
  boxShadow: '5px 10px #888888',
}
const Card = () => {
  return (
    <div style={contianerStyle}>
        <h3><strong>Capital:</strong></h3>
        <h3><strong>Population:</strong></h3>
        <h3><strong>Currency:</strong></h3>
        <h3><strong>Language:</strong></h3>
    </div>
  )
}

export default Card