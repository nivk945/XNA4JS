import Enum from '../Core/Enum.js';

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
}

const FRONT = new PlaneIntersectionType('Front');
const BACK = new PlaneIntersectionType('Back');
const INTERSECTING = new PlaneIntersectionType('Intersecting');

export default PlaneIntersectionType;