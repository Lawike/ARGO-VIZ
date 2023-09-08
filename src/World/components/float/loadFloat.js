import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
/**
 * Load a float object data from a 3D model.
 * @param { THREE.Vector3 } position 
 * @returns 
 */
export default async function loadFloat(position) {
    const floatData = await (new GLTFLoader()).loadAsync('../../../assets/models/float_placeholder.glb');
    const float = floatData.scene.children[0];
    return float;
}

export {
    loadFloat,
}