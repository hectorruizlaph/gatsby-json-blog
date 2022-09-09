import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Map from "./map"
import PostList from "./postList"

const Layout = props => {
  const children = props.children
  const [places, setPlaces] = useState([])

  useEffect(() => {
    if (props && props.data) {
      setPlaces(props.data.markdownRemark.frontmatter.places)
    } else {
      setPlaces([])
    }
  }, [props])

  return (
    <>
      <div style={{ display: "flex" }}>
        <PostList />
        <Map places={places} />
      </div>
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
