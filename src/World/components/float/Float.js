import { Vector3, Quaternion, MeshStandardMaterial } from "three";

export default function makeFloat({ loadedFloatObject }) {
    return class Float {

        #mesh;

        #latitude;

        #longitude;

        #countryCode;

        #name;

        #id;

        #vec3;
        /**
         * Float constructor
         * @param {Number} latitude 
         * @param {Number} longitude 
         * @param {String} countryCode 
         * @param {String} name 
         * @param {Number} id 
         * @param {Number} radius 
         */
        constructor(latitude, longitude, countryCode, name, id, radius) {
            this.#latitude = latitude;
            this.#longitude = longitude;
            this.#name = name;
            this.#countryCode = countryCode;
            this.#id = id;
            this.#vec3 = this.gcsToVec3(radius);
            this.#mesh = this.createMesh(this.#vec3);
        }

        /**
         * Converts geographical coordinates to a 3D vector
         * @param { Number } radius 
         * @link https://stackoverflow.com/questions/36369734/how-to-map-latitude-and-longitude-to-a-3d-sphere
         * @returns { Vector3 }
         */
        gcsToVec3(radius) {
            var phi   = (90-this.#latitude)*(Math.PI/180),
            theta = (this.#longitude+180)*(Math.PI/180),
            x = -((radius) * Math.sin(phi)*Math.cos(theta)),
            z = ((radius) * Math.sin(phi)*Math.sin(theta)),
            y = ((radius) * Math.cos(phi));
            return new Vector3(x, y, z);
        }

        /**
         * Creates the mesh of the float asynchronously.
         * It waits until the data from the object are loaded before creating the mesh.
         * @param {THREE.Vector3} position 
         * @param {Number} scaleFactor 
         * @returns {Promise<THREE.Mesh>}
         */
        createMesh(position, scaleFactor = 0.0025) {
            // We need the data from the loaded file to create the objects.
            return loadedFloatObject.then((floatData) => {
                const mesh = floatData.clone();

                // Position the mesh
                mesh.scale.multiplyScalar(scaleFactor);
                mesh.position.set(position.x, position.y, position.z);
                mesh.rotation.setFromVector3(position);
            
                // Align mesh to the surface
                const up = new Vector3(0, 1, 0);
                const rotationQuaternion = new Quaternion().setFromUnitVectors(up, position.clone().normalize());
                mesh.rotation.setFromQuaternion(rotationQuaternion);
            
                // Set mesh material
                const meshColor = new MeshStandardMaterial({
                    color: 'red',
                    flatShading: true,
                });
                mesh.material = meshColor;
                console.log('clone called');
                return mesh;
            })
        }

        getMesh() {
            return this.#mesh;
        }

        get latitude() {
            return this.#latitude;
        }

        get longitude() {
            return this.#longitude;
        }

        get countryCode() {
            return this.#countryCode;
        }

        get name() {
            return this.#name;
        }

        get id() {
            return this.#id;
        }

        get vec3() {
            return this.#vec3;
        }
    }
}

export {
    makeFloat,
}