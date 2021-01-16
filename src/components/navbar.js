import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Navbar = () => {

  const [location, setLocation] = useState(false)



  return (
    <div>
      <ul>
        <Link to="/" >Home</Link>
        {' '}
        <Link to="/about" >About</Link>
        <div onMouseEnter={() => setLocation(true)} onMouseLeave={() => setLocation(false)} role="dropdown" >
          <div>Location</div>
          {location && (
            <ul >
              <Link to="/location/san-francisco" >San Francisco</Link>
              {' '}
              <Link to="/location/solvang" >Solvang</Link>
              {' '}
              <Link to="/location/santa-barbara" >Santa Barbara</Link>
            </ul>
          )}
        </div>
      </ul>
    </div>
  )
}

export default Navbar


const Container = styled.div`
ul {
  display: flex;

}
`