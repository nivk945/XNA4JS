import Enum from '../Core/Enum.js';

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
}

const DISJOINT = new ContainmentType('Disjoint');
const CONTAINS = new ContainmentType('Contains');
const INTERSECTS = new ContainmentType('Intersects');

export default ContainmentType;