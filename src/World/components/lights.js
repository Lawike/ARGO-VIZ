import {
  DirectionalLight,
  AmbientLight,
  PointLight,
} from 'three';

function createLights() {
  const ambientLight = new AmbientLight('white', 0.05);
  // const mainLight = new DirectionalLight('white', 50);
  const sun = new PointLight('white', 500);

  // move the light right, up, and towards us
  sun.position.set(10, 4, 10);

  return { ambientLight, sun };
}

export { createLights };