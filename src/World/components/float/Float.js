export default function makeFloat({ loadFloat }) {
    return class Float {

        #mesh;

        constructor() {
            this.#mesh = loadFloat();
        }

        getMesh() {
            return this.#mesh;
        }
    }
}

export {
    makeFloat,
}