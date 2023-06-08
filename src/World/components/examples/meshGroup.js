import {
  SphereGeometry,
  Group,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  } from 'three';  

function createMeshGroup() {
  // a group holds other objects
  // but cannot be seen itself
  const group = new Group();

  const geometry = new SphereGeometry(0.25, 16, 16);

  const material = new MeshStandardMaterial({
  color: 'indigo',
  });

  // create one prototype sphere
  const protoSphere = new Mesh(geometry, material);

  // add the sphere to the group
  group.add(protoSphere);
  // create twenty clones of the protoSphere
  // and add each to the group
  // Need a value between 0 & 1 for i bc we cant to do trigonometry
  for (let i = 0; i < 1; i += 0.001) {
    const sphere = protoSphere.clone();
    // position the spheres on around a circle
    sphere.position.x = Math.cos(2 * Math.PI * i);
    sphere.position.y = Math.sin(2 * Math.PI * i);
    sphere.position.z = -i * 5;
    sphere.scale.multiplyScalar(0.01 + i);

    group.add(sphere);
  }

  const radiansPerSecond = MathUtils.degToRad(30);

  // every sphere inside the group will be scaled
  group.scale.multiplyScalar(2);

  group.tick = (delta) => {
    group.rotation.z -= delta * radiansPerSecond;
  }; 
  


  return group;
}

function createCube() {
  // create a geometry
  const geometry = new BoxGeometry(2, 2, 2);

  // create a default (white) Basic material
  const material = createMaterial();

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);

  const radiansPerSecond = MathUtils.degToRad(30);

  cube.tick = (delta) => {
    // increase the cube's rotation each frame
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

export { createMeshGroup  };