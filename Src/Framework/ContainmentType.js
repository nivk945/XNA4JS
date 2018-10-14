import Enum from "../Core/Enum.js";

class ContainmentType extends Enum {
    static get Disjoint() {
        return DISJOINT;
    }

    static get Contains() {
        return CONTAINS;
    }

    static get Intersects() {
        return INTERSECTS;
    }

    static fromJSON(obj) {
        if (typeof obj === 'string') {
            obj = JSON.parse(obj);
        }
        if (!ContainmentType[obj['_enum']]) {
            throw new TypeError('Unrecognized type');
        }
        return ContainmentType[obj['_enum']];
    }
}

const DISJOINT = new ContainmentType('Disjoint');
const CONTAINS = new ContainmentType('Contains');
const INTERSECTS = new ContainmentType('Intersects');

export default ContainmentType;