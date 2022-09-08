import { useStaticQuery, graphql } from 'gatsby';

export default function usePlaces(){

    const data = useStaticQuery(graphql`
    query {
      allPlaces {
        nodes {
          address
          alias
          city
          latitude
          longitude
          name
          postal
          title
          state {
            name
          }
          id
        }
      }
    }
  `)
  
  const places = data.allPlaces.nodes.map(node => {
    const { 
      id, 
      address,
      alias,
      city,
      latitude,
      longitude,
      name,
      postal,
      title  
    } = node;
    return {
      id,
      title,
      address,
      city,
      coordinates: [latitude, longitude]
    }
  });
  return {
    places
  }
}