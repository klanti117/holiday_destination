import React from 'react'
import Card from '../Card/index'
const contianerStyle = {
    border:'1px dotted gray'
}

const index = () => {
  return (
    <div style={contianerStyle}>
    {/* <h2>this is the card holder</h2> */}
        <Card/>
    </div>
  )
}

export default index