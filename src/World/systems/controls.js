import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);
  /* damping and auto rotation require
   * the controls to be updated each frame
   */

  // this.controls.autoRotate = true;
  controls.enableDamping = true;
  controls.tick = () => controls.update();
  controls.minDistance = 1.15;

  return controls;
}

export { createControls };