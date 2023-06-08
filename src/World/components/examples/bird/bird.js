import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { setupModel } from './setupModel.js';

async function loadBirds() {
  const loader = new GLTFLoader();
  const parrotData = await loader.loadAsync('/assets/models/Parrot.glb');
  const parrot = setupModel(parrotData);

  parrot.position.set(1,4,0);
  parrot.rotation.y = -Math.PI/2;
  parrot.scale.multiplyScalar(0.05)

  return { parrot }
}

export { loadBirds };