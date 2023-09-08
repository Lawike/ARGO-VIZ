import {
  DirectionalLight,
  AmbientLight,
  HemisphereLight,
} from 'three';

function createLights() {
  // const mainLight = new DirectionalLight('white', 50);
  const sun = new DirectionalLight('white', 1.5);
  const antisun = new DirectionalLight('white', 1.5);

  const ambient = new AmbientLight(0x040404);
  const hemisphereLight = new HemisphereLight('blue', 'yellow', 0.5);
  // move the light right, up, and towards us
  sun.position.set(4, 4, 4);
  antisun.position.set(-4, -4, -4);
  return { sun, hemisphereLight, ambient, antisun };
}

export { createLights };