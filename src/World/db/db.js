import { data } from './data.js';

class DB {
    #data = data;

    constructor() {}

    getData(filters = {}) {
        const keys = Object.keys(filters);
        return this.#data.filter((elem) => {
            let check = true;
            let index = 0;
            while (check && index < keys.length) {
                check = (elem[keys[index]] == filters[keys[index]]);
                index += 1;
            }
            return check;
        });
    }
}

export { DB };