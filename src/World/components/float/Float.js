import { Vector3 } from "three";

export default function makeFloat({ loadFloat }) {
    return class Float {

        #mesh;

        #latitude;

        #longitude;

        constructor(latitude, longitude, radius) {
            this.#latitude = latitude;
            this.#longitude = longitude;
            this.#mesh = loadFloat(this.gcsToVec3(radius));
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

        getMesh() {
            return this.#mesh;
        }

        get latitude() {
            return this.#latitude;
        }

        get longitude() {
            return this.#longitude;
        }
    }
}

export {
    makeFloat,
}