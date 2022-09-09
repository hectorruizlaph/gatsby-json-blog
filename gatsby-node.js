const fetch = require('node-fetch');

const NODE_TYPE = 'Places'; 

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  const response = await fetch('https://stage.radnet.com/locator/search/json');
  const json = await response.json();
  const matched = json.matched;

  const matchedPlaces = matched.map(places => { 
    return places
  });
  matchedPlaces.forEach((node, index) => {
    createNode({
      ...node,
      id: createNodeId(`${NODE_TYPE}-${node.nid}`),
      parent: null,
      children: [],
      internal: {
        type: NODE_TYPE,
        content: JSON.stringify(node),
        contentDigest: createContentDigest(node),
      }
    })
  })
}

// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }


    // const title = places.title;
    // const name = places.name;
    // const address = places.address;
    // const city = places.city;
    // const postal = places.postal;
    // const latitude = places.latitude;
    // const longitude = places.longitude;

    // const place = {
    // "id": places.nid,
    // "title" : places.title,
    // "name" : places.name,
    // "address" : places.address,
    // "city" : places.city,
    // "postal" : places.postal,
    // "latitude" : places.latitude,
    // "longitude" : places.longitude,
    // }