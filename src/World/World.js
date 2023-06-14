import {
  createAxesHelper,
  createGridHelper,
  createPointLightHelper,
  createVertexNormalsHelper,
} from './components/helpers.js';


import { createCamera } from './components/camera.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';
import { createControls } from './systems/controls.js';

import { Earth } from './components/earth/Earth.js';
import { Float } from './components/float/index.js';

class World {

  #camera;

  #scene;

  #renderer;

  #loop;
  
  // 1. Create an instance of the World app
  constructor(container, renderOnDemand = false, dev = false) {
    this.#camera = createCamera();
    this.#scene = createScene();
    this.#renderer = createRenderer();
    this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);
    this.container = container;

    const resizer = new Resizer(container, this.#camera, this.#renderer);

    container.append(this.#renderer.domElement);

    // Camera controls
    const controls = createControls(this.#camera, this.#renderer.domElement);

    // Render on demand setup
    if (renderOnDemand) {
      controls.addEventListener('change', () => {
        this.render();
      });
    } else {
      this.#loop.updatables.push(controls);
    }
    // Scene management
    const {  sun, ambient } = createLights();

    this.#scene.add(ambient, sun);    
    if (dev){
      this.#scene.add(
        createAxesHelper(),
        createGridHelper(),
        createPointLightHelper(sun),
       // createVertexNormalsHelper(earth.getMesh()),
      );
    }
  }

  async init() {
    const earth = new Earth();
    const float = new Float();

    this.#loop.updatables.push(earth);

    this.#scene.add(await earth.getMesh(), await float.getMesh());
  }
  // 2. Render the scene
  render() {
    // draw a single frame
    this.#renderer.render(this.#scene, this.#camera);
  }

  start() {
    this.#loop.start();
  }
  
  stop() {
    this.#loop.stop();
  }
}

export { World };