import { World } from './World/World.js';

// create the main function
async function main() {
  // Get a reference to the container element
  const container =  document.querySelector('#scene-container');

  const renderOnDemand = false;
  // 1. Create an instance of the World app
  const world = new World(container, renderOnDemand, import.meta.env.DEV);
  // complete async tasks
  await world.init();
  // 2. Render the scene
  if (renderOnDemand) world.render();
  else world.start();
}

// call main to start the app
main().catch((err) => {
  console.log(err);
});