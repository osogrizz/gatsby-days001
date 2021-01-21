import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'

const Location = ({ data }) => {
  return (
    <Layout>
      <div>
        Welcome to {data.contentfulLocation.name}
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