import { Mesh, MeshBasicMaterial, MeshPhongMaterial, MeshStandardMaterial, SphereGeometry } from "three";

function createEarth() {
  const sphere = new SphereGeometry(1, 64, 32);
  const material = new MeshStandardMaterial({ color: 'blue' });

  const earth = new Mesh(sphere, material);
  return earth;
}

export { createEarth };