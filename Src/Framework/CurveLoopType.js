import Enum from '../Core/Enum.js';

class CurveLoopType extends Enum {
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
}

const CONSTANT = new CurveLoopType('Constant');
const CYCLE = new CurveLoopType('Cycle');
const CYCLE_OFFSET = new CurveLoopType('CycleOffset');
const LINEAR = new CurveLoopType('Linear');
const OSCILLATE = new CurveLoopType('Oscillate');

export default CurveLoopType;