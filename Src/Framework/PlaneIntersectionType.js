import Enum from "../Core/Enum.js";

class PlaneIntersectionType extends Enum {
    static get Front() {
        return FRONT;
    }

    static get Back() {
        return BACK;
    }

    static get Intersecting() {
        return INTERSECTING;
    }

    static fromJSON(obj) {
        if (typeof obj === 'string') {
            obj = JSON.parse(obj);
        }
        if (!PlaneIntersectionType[obj['_enum']]) {
            throw new TypeError('Unrecognized type');
        }
        return PlaneIntersectionType[obj['_enum']];
    }
}

const FRONT = new PlaneIntersectionType('Front');
const BACK = new PlaneIntersectionType('Back');
const INTERSECTING = new PlaneIntersectionType('Intersecting');

export default PlaneIntersectionType;