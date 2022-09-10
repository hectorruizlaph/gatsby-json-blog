import React, { useRef, useEffect, useState } from "react"
import mapboxgl from "mapbox-gl"
import bbox from "@turf/bbox"
import { multiPoint } from "@turf/helpers"
import Markers from "./markers"
import "mapbox-gl/dist/mapbox-gl.css"
import usePlaces from "../hooks/usePlaces"


// replace with your own Mapbox token
const MAPBOX_TOKEN =
  "pk.eyJ1IjoiaGVjdG9ybGFwaCIsImEiOiJjazhtYjg5dGMwbHBjM2lxeG40aDBudzJqIn0.NrRc3iTV4ddFu-wx7rBOyw"

const mapContainerStyle = {
  width: "70vw",
  height: "100vh",
  overflowY: "hidden"
}

const Map = () => {
  const { placesData } = usePlaces();
  console.log(placesData)
  const mapContainerRef = useRef(null)

  const [map, setMap] = useState(null)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      accessToken: MAPBOX_TOKEN,
      style: "mapbox:// 4styles/mapbox/light-v10",
      // First Map View = Baltimore [lng, lat]
      center: [-76.61069701902477, 39.28838182350299],
      zoom: 9,
    })

    // Add Navegation Controls
    map.addControl(new mapboxgl.NavigationControl(), "top-right")

    // Create All Markers
    placesData.map((coordinate) =>
      new mapboxgl.Marker().setLngLat(coordinate.coordinates).addTo(map)
    );

    setMap(map)

    return () => map.remove()
  }, [])

  // useEffect(() => {
  //   if (!map) return

  //   if (places && places.length !== 0) {
  //     const coords = []
  //     new mapboxgl.Marker({ color: 'red' })
  //   .setLngLat([-76.61069701902477, 39.28838182350299])
  //   .addTo(map);
  //     places.map(place => {
  //       coords.push([place.latitude, place.longitude])
  //     })
  //     const feature = multiPoint(coords)
  //     const box = bbox(feature)

  //     map.fitBounds(
  //       [
  //         [box[0], box[1]],
  //         [box[2], box[3]],
  //       ],
  //       {
  //         padding: 40,
  //         maxZoom: 14,
  //         duration: 2000,
  //       }
  //     )
  //   } else {
  //     map.easeTo({
  //       center: [-76.61069701902477, 39.28838182350299],
  //       zoom: 9,
  //       duration: 2000,
  //     })
  //   }
  // }, [map, places])

      //Default Markers
      // new mapboxgl.Marker().setLngLat(places).addTo(map)
      

  return (
    <div ref={mapContainerRef} style={mapContainerStyle}>
      {/* {places && map && <Markers map={map} places={places} />} */}
    </div>
  )
}

export default Map
