import React, { useState, useEffect } from "react"
// import PropTypes from "prop-types"
import Map from "./map"
import PostList from "./postList"
import usePlaces from "../hooks/usePlaces"


const Layout = () => {
  const { placesData } = usePlaces();

let coordinates= placesData.map( (data, id) => {
return [  
  id,
  data.coordinates
]
})
console.log(coordinates)
  // const [places, setPlaces] = useState([])

  // useEffect(() => {
  //   if (placesData) {
  //     setPlaces(placesData.map( (data, id) => {
  //       return console.log(data.coordinates)
  //       // { 
  //       //   "id": id,
  //       //   "coordinates": data.coordinates
  //       // }
  //       }))
  //   } else {
  //     setPlaces([])
  //   }
  // }, [places])

  return (
    <>
       <div style={{ display: "flex", overflowY: "hidden" }}>
        <PostList />
        {/* <Map places={placesData.coordinates} style={{ overflowY: "hidden" }}/>  */}
        <Map /> 
      </div>
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
