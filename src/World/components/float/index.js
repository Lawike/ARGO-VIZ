import { loadFloat } from "./loadFloat";
import { makeFloat } from "./Float";

const Float = makeFloat({ loadFloat });

export default Float;

export {
    Float
}