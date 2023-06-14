import { 
  AxesHelper,
  GridHelper,
  PointLightHelper,
} from 'three';

import { VertexNormalsHelper } from 'three/addons/helpers/VertexNormalsHelper.js';

function createAxesHelper() {
  const helper = new AxesHelper(3);
  helper.position.set(-3.5, 0, -3.5);
  return helper;
}

function createGridHelper() {
  const helper = new GridHelper(6);
  return helper;
}

function createPointLightHelper(light) {
  const helper = new PointLightHelper(light, 1);
  return helper;
}

function createVertexNormalsHelper(mesh) {
  const helper = new VertexNormalsHelper( mesh, 0.005, 0xff0000 );
  return helper;
}

export { createAxesHelper, createGridHelper, createPointLightHelper, createVertexNormalsHelper };
