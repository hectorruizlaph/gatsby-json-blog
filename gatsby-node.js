const fetch = require('node-fetch');

const NODE_TYPE = 'Places'; 

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  const response = await fetch('https://stage.radnet.com/locator/search/json');
  const json = await response.json();
  const matched = json.matched;
  console.log('json', matched)

  const matchedPlaces = matched.map(places => {
    // const title = places.title;
    // const name = places.name;
    // const address = places.address;
    // const city = places.city;
    // const postal = places.postal;
    // const latitude = places.latitude;
    // const longitude = places.longitude;

    const place = {
    "id": places.nid,
    "title" : places.title,
    "name" : places.name,
    "address" : places.address,
    "city" : places.city,
    "postal" : places.postal,
    "latitude" : places.latitude,
    "longitude" : places.longitude,
    } 
    return place

  });
  matchedPlaces.forEach((node, index) => {
    createNode({
      ...node,
      id: createNodeId(`${NODE_TYPE}-${node.id}`),
      parent: null,
      children: [],
      internal: {
        type: NODE_TYPE,
        content: JSON.stringify(node),
        contentDigest: createContentDigest(node),
      }
    })
  })

  console.log(matchedPlaces)
}
