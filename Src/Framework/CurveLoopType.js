import Enum from "../Core/Enum.js";

class CurveLoopType extends Enum {
    constructor(key) {
        super();
        this._setPrivateVar('_enum', key);
    }

    static get Constant() {
        return CONSTANT;
    }

    static get Cycle() {
        return CYCLE;
    }

    static get CycleOffset() {
        return CYCLE_OFFSET;
    }

    static get Linear() {
        return LINEAR;
    }

    static get Oscillate() {
        return OSCILLATE;
    }

    static fromJSON(obj) {
        if (typeof obj === 'string') {
            obj = JSON.parse(obj);
        }
        if (!CurveLoopType[obj['_enum']]) {
            throw new TypeError('Unrecognized type');
        }
        return CurveLoopType[obj['_enum']];
    }
}

const CONSTANT = new CurveLoopType('Constant');
const CYCLE = new CurveLoopType('Cycle');
const CYCLE_OFFSET = new CurveLoopType('CycleOffset');
const LINEAR = new CurveLoopType('Linear');
const OSCILLATE = new CurveLoopType('Oscillate');

export default CurveLoopType;