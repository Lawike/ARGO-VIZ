import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Vector3, Quaternion } from "three";
/**
 * Load a float object on the scene.
 * @param { THREE.Vector3 } position 
 * @returns 
 */
export default async function loadFloat(position) {
    const floatData = await (new GLTFLoader()).loadAsync('../../../assets/models/float_placeholder.glb');
    const float = floatData.scene.children[0];
    float.scale.multiplyScalar(0.025);
    float.position.set(position.x, position.y, position.z);
    float.rotation.setFromVector3(position);
    // Align float to the surface
    const up = new Vector3(0, 1, 0);
    const rotationQuaternion = new Quaternion().setFromUnitVectors(up, position.clone().normalize());
    float.rotation.setFromQuaternion(rotationQuaternion);
    return float;
}

export {
    loadFloat,
}