import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'

const Location = ({ data }) => {
  return (
    <Layout>
      <div key={data.contentfulLocation.id}>
        <h1>Welcome to {data.contentfulLocation.name}</h1>
        <h3>{data.contentfulLocation.locationCaption}</h3>

        <div>
          <pre>Lat. {data.contentfulLocation.location.lat}</pre>
          <pre>Lon. {data.contentfulLocation.location.lon}</pre>
        </div>

      </div>
    </Layout>
  )
}

export default Location


export const locationQuery = graphql`
  query ($id: String!) {
    contentfulLocation(id: {eq: $id} ) {
      id
      name
      locationCaption
      location {
        lon
        lat
      }
    }
  }

`