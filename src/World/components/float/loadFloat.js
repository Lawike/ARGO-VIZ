import { Euler, SphereGeometry, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { GCS } from "../../utils";

/**
 * Load a float object on the scene.
 * @param { THREE.Vector3 } position 
 * @returns 
 */
export default async function loadFloat(position, earth) {
    try {
        const floatData = await (new GLTFLoader()).loadAsync('../../../assets/models/float_placeholder.glb');
        const float = floatData.scene.children[0];
        float.scale.multiplyScalar(0.025);
        float.position.set(position.x, position.y, position.z);
        return float;
    } catch (e) {
        console.log(e);
    }
}

export {
    loadFloat,
}