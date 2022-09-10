import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import usePlaces from "../hooks/usePlaces"

const PostList = () => {
    const { placesData } = usePlaces();

  return (
    <ul
      style={{
        width: "30vw",
        listStyleType: "none",
        padding: 0,
        maxHeight: "99vh",
        overflowY: "auto",
      }}
    >{placesData.map(place => {
        const { id, title, address, city, coordinates } = place
        return (
          <li key={id}>
            <h3>{title}</h3>
            {/* <p>{coordinates.join(", ")}</p> */}
            <p>{coordinates}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default PostList
