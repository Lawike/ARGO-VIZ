import {
  DirectionalLight,
  AmbientLight,
  HemisphereLight,
} from 'three';

function createLights() {
  const ambientLight = new AmbientLight('white', 2);
  const hemisphereLight = new HemisphereLight(
    'white', // bright sky color
    'darkslategrey', // dim ground color
    3, // intensity
  );
  const mainLight = new DirectionalLight('white', 2);

  // move the light right, up, and towards us
  mainLight.position.set(10, 10, 10);

  return { ambientLight, mainLight, hemisphereLight };
}

export { createLights };