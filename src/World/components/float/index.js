import { loadFloat } from "./loadFloat";
import { makeFloat } from "./Float";

const loadedFloatObject = loadFloat();
const Float = makeFloat({ loadedFloatObject });

export default Float;

export {
    Float
}