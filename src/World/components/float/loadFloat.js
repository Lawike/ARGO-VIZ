import { Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default async function loadFloat() {
    try {
        const floatData = await (new GLTFLoader()).loadAsync('../../../assets/models/float_placeholder.glb');
        const float = floatData.scene.children[0];
        float.scale.multiplyScalar(0.025);
        float.translateY(2);
        return float;
    } catch (e) {
        console.log(e);
    }
}

export {
    loadFloat,
}