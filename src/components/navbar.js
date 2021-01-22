import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import CityList from '../components/city-list'

const Navbar = () => {
  const [location, setLocation] = useState(false)

  return (
        <Container>
          <ul>
            <Link to="/" >Home</Link>

            <Link to="/about" >About</Link>

            <div onMouseEnter={() => setLocation(true)} onMouseLeave={() => setLocation(false)} role="dropdown" >
              <div>Location</div>
              {location && (
                <ul className="city-list">
                  <CityList />
                </ul>
            )}
            </div>
          </ul>
        </Container >
  )
}

export default Navbar


const Container = styled.div`
  ul {
    display: flex;
    justify-content: space-around;
    width: 500px;

  }

  .city-list {
    position: absolute;
    display: flex;
    flex-direction: column;
  }
`

