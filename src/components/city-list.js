import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

const CityList = () => {
  return (

    <StaticQuery
      query={graphql`
      query navQuery {
        allContentfulLocation {
          edges {
            node {
              id
              name
              locationCaption
              gatsbyPath(filePath:"/location/{contentfulLocation.name}")
            }
          }
        }
      }
    `}
      render={data => (
        <>
          {data.allContentfulLocation.edges.map(edges => (
            <Link id={edges.node.id} to={edges.node.gatsbyPath} >{edges.node.name}</Link>
          ))}    
        </>
      )}
    />
  )
}

export default CityList
