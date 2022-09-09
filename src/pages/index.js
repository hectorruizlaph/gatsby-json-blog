import * as React from "react"
import { Link } from "gatsby"

import usePlaces from "../hooks/usePlaces"

import Layout from "../components/layout"
import * as styles from "../components/index.module.css"

const IndexPage = () => {
  const { places } = usePlaces();

  return (
    <Layout>
      <ul>
        {places.map(place => {
          const { id, title, address, city, coordinates } = place
          return (
            <li key={id}>
              <h3>{title}</h3>
              <p>{coordinates.join(", ")}</p>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export default IndexPage
