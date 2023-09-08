import { Mesh, MeshPhongMaterial, SphereGeometry, TextureLoader } from "three";

function createEarth() {
  const sphere = new SphereGeometry(1, 512, 256);
  const heightMap = new TextureLoader().load(
    '../../../assets/topography/topography_map.png');
  const texture = new TextureLoader().load(
    '../../../assets/topography/placeholder_earth.jpg');
  const material = new MeshPhongMaterial( {
    displacementMap: heightMap,
    map: texture,
    displacementScale: 0.05,
  });
  const earth = new Mesh(sphere, material);
  return earth;
}

class Earth {

  #mesh;

  constructor() {
    this.#mesh = createEarth();
  }

  tick(delta) {
    
  }

  getMesh() {
    return this.#mesh;
  }
}

export { Earth };